from exchanges import extract_pdf
from exchanges import create_pdf
import re

path_to_pdf = ""

mail = re.findall(r"[a-zA-Z0-9\.\-+_]+@[a-zA-Z0-9\.\-+_]+\.[a-z]+", get_pdf_file_content(path_to_pdf))
print (mail)


adress = re.findall(r"[0-9]+ rue +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress1 = re.findall(r"[0-9]+ avenue +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress2 = re.findall(r"[0-9]+ impasse +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress3 = re.findall(r"[0-9]+ voie +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress4 = re.findall(r"[0-9]+ boulevard +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress5 = re.findall(r"[0-9]+ chemin +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
adress6 = re.findall(r"[0-9]+ allée +[\a-zA-Z*\n]{1,200}" , get_pdf_file_content(path_to_pdf))
print (adress)

# zipcode = re.findall(r"[0-9]{5} +[\a-zA-Z*]{1,50}", get_pdf_file_content(path_to_pdf))
# print (zipcode)

phonenumber = re.findall(r"([\0-9]{10,16})" , get_pdf_file_content(path_to_pdf))
print (phonenumber)

date1 = re.findall(r"([2-9]|1[0-2]?)/[0-3][1-9]/[1-2][9|0][0-9]{2}" , get_pdf_file_content(path_to_pdf))
date2 = re.findall(r"\d{2}-\d{2}-\d{4}" , get_pdf_file_content(path_to_pdf))
date3 = re.findall(r"\d{2}.\d{2}.\d{4}" , get_pdf_file_content(path_to_pdf))
date4 = re.findall(r"\d{4}" , get_pdf_file_content(path_to_pdf))

print (date1)
print (date2)
print (date3)
print (date4)

from ast import alias
import re
import pdfplumber
from fpdf import FPDF

document = pdfplumber.open("CV Dubray.pdf")
first_page = document.pages[0]
cv = first_page.extract_text()



# mail = re.findall(r"[a-zA-Z0-9\.\-+_]+@[a-zA-Z0-9\.\-+_]+\.[a-zA-Z]+", cv)
# zipcode = re.findall(r"[0-9]{5}", cv)

# str_to_replace = {mail[0]: "oceanet@gmail.fr",
#                 zipcode[0]: "77500"}

# for key, value in str_to_replace.items():
#     cv = cv.replace(key, value)

# print(cv)

mail = re.sub(r"[a-zA-Z0-9\.\-+_]+@[a-zA-Z0-9\.\-+_]+\.[a-zA-Z]+", "", cv)
zipcode = re.sub(r"[0-9]{5}", "", mail)

# print(zipcode)

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size = 3)

for x in f:
    pdf.cell(200, 10, txt = x, ln = 1, align = 'C')
   
# save the pdf with name .pdf
pdf.output("mygfg.pdf") 
# pdf.cell(100, 10, txt = zipcode)

pdf.output("sortie.pdf")

