import requests
import urllib
import PIL
from PIL import Image

"This simple program gets a random dog picture from RESTApi and saves it."

# Save picture as dog.png
def plot_img(img):
    urllib.request.urlretrieve(img, "dog.png")
    pic = PIL.Image.open("dog.png")
    print("Picture saved as dog.png.")

# Get random dog picture from RESTapi
def get_random_img():
    endings = [".png", ".jpeg", ".jpg"]
    url = "https://random.dog"
    for i in range(10):
        r = requests.get(url + "/woof")
        if r.status_code == 200 and (r.text.endswith('.png')
                or r.text.endswith('.jpeg')
                or r.text.endswith('.jpg')):
            img_url = url + "/" + r.text
            print("Image url: {0}" .format(img_url))
            return img_url
    return 0

def main():
    img = get_random_img()
    if img:
        plot_img(img)
    else:
        print("API request not successfull.")

if __name__ == "__main__":
    main()
