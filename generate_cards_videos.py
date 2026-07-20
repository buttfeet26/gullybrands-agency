import os
import sys
import shutil
import subprocess
from concurrent.futures import ThreadPoolExecutor

GEN_SCRIPT = "/Users/rahuls/.hermes/skills/media/gemini-video-gen/scripts/generate.py"

tasks = [
    {
        "name": "shop-board",
        "prompt": "Cinematic close-up of a local artist's hand painting custom vintage gold-leaf lettering on a textured wooden shop signboard, slow-motion paintbrush strokes, warm lighting, Mumbai street style, 4k",
        "dest": "/Users/rahuls/Documents/gully-brands/website/assets/shop-board.mp4"
    },
    {
        "name": "instagram-suck",
        "prompt": "Aesthetic handheld shot of a young creator's hand holding a smartphone, filming a colorful, lively local Mumbai market stall on the phone screen, soft focus background, cinematic warm sun flare, 4k",
        "dest": "/Users/rahuls/Documents/gully-brands/website/assets/instagram-suck.mp4"
    },
    {
        "name": "festival-campaigns",
        "prompt": "Aesthetic slow-motion close-up of beautiful festive fairy lights and small warm clay diya lamps burning softly in the evening, golden festive sparks, cozy celebratory atmosphere, cinematic bokeh, 4k",
        "dest": "/Users/rahuls/Documents/gully-brands/website/assets/festival-campaigns.mp4"
    }
]

def run_gen(task):
    name = task["name"]
    prompt = task["prompt"]
    dest = task["dest"]
    
    print(f"[{name}] Starting generation...")
    cmd = [
        sys.executable,
        GEN_SCRIPT,
        prompt,
        "--aspect", "9:16",
        "--duration", "5"
    ]
    
    # Run the generation script and capture its output (the path to the generated video)
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        generated_path = res.stdout.strip().split("\n")[-1]
        if os.path.exists(generated_path):
            if os.path.exists(dest):
                os.remove(dest)
            shutil.copy(generated_path, dest)
            print(f"[{name}] SUCCESS: Saved to {dest}")
            return True
        else:
            print(f"[{name}] ERROR: Generated file not found at {generated_path}")
    else:
        print(f"[{name}] ERROR: Script failed with code {res.returncode}")
        print(f"[{name}] STDERR:\n{res.stderr}")
    return False

def main():
    print("Starting parallel video generation using Veo 3.1...")
    with ThreadPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(run_gen, tasks))
        
    if all(results):
        print("\nAll videos generated successfully!")
    else:
        print("\nSome generations failed.")

if __name__ == "__main__":
    main()
