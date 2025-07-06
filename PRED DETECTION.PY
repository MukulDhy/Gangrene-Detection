from ultralytics import YOLO
from PIL import Image
import cv2
import numpy as np

import torch
import sys

# Load a model
model = YOLO('gangrene final project/train2/weights/best.pt')  # load a pretrained model (recommended for training)
print("Predication -")

inputPath  =  sys.argv[1]
outputPath = sys.argv[2] + sys.argv[3] + "_predication.png"

# Run inference with the YOLOv8n model on the 'bus.jpg' image
results = model.predict(source=inputPath, conf=0.10, save=True)
print(results)

# Show the results
for r in results:
    im_array = r.plot()  # plot a BGR numpy array of predictions
    im = Image.fromarray(im_array[..., ::-1])  # RGB PIL image
    im.save(outputPath)  # save image
    
# from ultralytics import YOLO
# from PIL import Image
# import cv2
# import numpy as np

# import torch
# import sys

# # Load a model
# model = YOLO('gangrene final project/train2/weights/best.pt')  # load a pretrained model (recommended for training)


# # inputPath  =  sys.argv[1]
# # outputPath = sys.argv[2] + sys.argv[3] + "_predication.png"

# # Run inference with the YOLOv8n model on the 'bus.jpg' image
# results = model.predict(source="gang.jpg", conf=0.10, save=True)
# print(results)

# # Show the results
# for r in results:
#     im_array = r.plot()  # plot a BGR numpy array of predictions
#     im = Image.fromarray(im_array[..., ::-1])  # RGB PIL image
#     im.save("result.jpg")  # save image