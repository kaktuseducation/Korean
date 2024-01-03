import cv2
import pytesseract

img = cv2.imread('test.png') #Открываем изображение
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) #Переводим изображение в формат RGB

#pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
#Настройки tesseract: https://help.ubuntu.ru/wiki/tesseract#tesseract
#config = r'--oem 3 --psm 6' #Настройки конфигурации oem - версия движка psm - версия формата изображения

text = pytesseract.image_to_string(img, config=config)#Распознаем текс с изображения
print(text)
