import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# options = webdriver.ChromeOptions()
# options.add_argument('--ignore-certificate-errors')
# options.add_argument('--incognito')
# options.add_argument('--headless')
# driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver", chrome_options=options)

def crawl_start(param):
    driver = webdriver.Chrome('/Users/curieyoo/chromedriver')
    
    url = 'https://www.diningcode.com/list.php?query='+param

    driver.get(url)


    wait = WebDriverWait(driver,10)
    for x in range(9):
        more_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, """//*[@id="div_list_more"]"""))
        )
        # more_button = driver.find_element_by_xpath("""//*[@id="div_list_more"]""")
        more_button.click()
    #       driver.execute_script("more_buttons.click();")
        time.sleep(5)

    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    restaurants = soup.findAll("span",attrs={"class":"btxt"})
    food_kinds = soup.findAll("span", attrs={"class":"stxt"})

    menu = []


    for line in (food_kinds[1:]):
        line = line.get_text()
        line.replace(" ", "")
        menus = line.split(",")
        for item in menus:
            menu.append(item)

    

    return menu

menu_list = []

# menu_list.extend(crawl_start('직장인'))
# menu_list.extend(crawl_start('안주'))
# query = ['서울', '부산', '밥집', '한식', '중식', '양식', '일식', '고기', '회식', '점심', '직장인', '안주']
query = ['인기', '점심']
for word in query:
    menu_list.extend(crawl_start(word))



menu_set = set(menu_list)
print(menu_set)