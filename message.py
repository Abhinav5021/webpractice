import pyautogui
import time

def auto_type(message, repeat=1, interval=0.5):
    print("Starting in 5 seconds... Switch to your target window!")
    time.sleep(5)
    
    for i in range(repeat):
        # Types the message
        pyautogui.typewrite(message)
        
        # Presses the 'enter' key
        pyautogui.press('enter')
        
        # Short pause between messages
        time.sleep(interval)

# Usage
msg = "Sorry Mayuri .."
auto_type(msg, repeat=100, interval=1.0)