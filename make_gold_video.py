import os
import sys
import math
import shutil
import subprocess
from PIL import Image
import numpy as np

def generate_gold_video():
    img_path = "/Users/rahuls/Documents/gully-brands/website/assets/nakoda-gold.jpg"
    out_dir = "/tmp/gold_frames"
    
    # Create temp frames dir
    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)
    
    # Load base image
    base_img = Image.open(img_path).convert("RGB")
    width, height = base_img.size
    
    # Convert PIL Image to numpy array for fast vector operations
    img_array = np.array(base_img, dtype=np.float32)
    
    fps = 30
    duration = 4.0 # 4 seconds
    total_frames = int(fps * duration)
    
    # Sweep settings
    theta = math.pi / 4.0 # 45 degrees
    cos_t = math.cos(theta)
    sin_t = math.sin(theta)
    
    # Precompute projection for every pixel (x, y)
    x_indices, y_indices = np.meshgrid(np.arange(width), np.arange(height))
    proj_grid = x_indices * cos_t + y_indices * sin_t
    
    max_proj = width * cos_t + height * sin_t
    min_proj = 0.0
    
    # We want the sweep to take 2 seconds (60 frames)
    sweep_frames = 60
    
    # Width and blur parameters of the beam
    sigma = 45.0
    max_glow = 0.35 # intensity of the shine (0 to 1)
    
    print("Generating frames...")
    for f in range(total_frames):
        if f < sweep_frames:
            # Animate center_proj from min - pad to max + pad
            pad = 150.0
            t = f / float(sweep_frames)
            center_proj = (min_proj - pad) + t * (max_proj - min_proj + 2 * pad)
            
            # Distance from projection to center_proj
            dist = np.abs(proj_grid - center_proj)
            
            # Compute Gaussian beam intensity
            intensity = max_glow * np.exp(-0.5 * (dist / sigma) ** 2)
            
            # Golden white glow color mapping (R: 255, G: 235, B: 180)
            glow_r = intensity * 255.0
            glow_g = intensity * 230.0
            glow_b = intensity * 170.0
            
            # Apply glow to original channels
            frame_array = np.zeros_like(img_array)
            frame_array[..., 0] = np.clip(img_array[..., 0] + glow_r, 0, 255)
            frame_array[..., 1] = np.clip(img_array[..., 1] + glow_g, 0, 255)
            frame_array[..., 2] = np.clip(img_array[..., 2] + glow_b, 0, 255)
        else:
            # Quiet period - exact copy of the original
            frame_array = img_array
            
        # Convert back to uint8 and save
        frame_img = Image.fromarray(frame_array.astype(np.uint8))
        frame_img.save(os.path.join(out_dir, f"frame_{f:04d}.jpg"), "JPEG", quality=90)
        
    print("Muxing video with FFmpeg...")
    video_path = "/Users/rahuls/Documents/gully-brands/website/assets/nakoda-gold.mp4"
    if os.path.exists(video_path):
        os.remove(video_path)
        
    cmd = [
        "ffmpeg", "-y",
        "-framerate", str(fps),
        "-i", os.path.join(out_dir, "frame_%04d.jpg"),
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-profile:v", "main",
        "-level", "3.1",
        "-crf", "18",
        video_path
    ]
    
    subprocess.run(cmd, check=True)
    print(f"Video saved successfully to {video_path}")
    
    # Clean up frames
    shutil.rmtree(out_dir)

if __name__ == "__main__":
    generate_gold_video()
