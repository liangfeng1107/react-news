# -*- coding: utf-8 -*-
"""
Created on Mon May 22 14:29:00 2017

@author: a616148
"""

from flask import Flask, Response
from crawler import crawler
import json

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
    
@app.route("/news")
def news():
    url = 'http://rss.sina.com.cn/tech/rollnews.xml'
    news = crawler(url)
    json_string = json.dumps(news, ensure_ascii = False)
    #creating a Response object to set the content type and the encoding
    response = Response(json_string, content_type="application/json; charset=utf-8" )
    return response
    
@app.route("/internet")
def internet():
    url = 'http://rss.sina.com.cn/tech/internet/home28.xml'
    internet =  crawler(url)
    json_string = json.dumps(internet, ensure_ascii = False)
    #creating a Response object to set the content type and the encoding
    response = Response(json_string, content_type="application/json; charset=utf-8" )
    return response
    
@app.route("/it")
def it():
    url = 'http://rss.sina.com.cn/tech/it/gn37.xml'
    it = crawler(url)  
    json_string = json.dumps(it, ensure_ascii = False)
    #creating a Response object to set the content type and the encoding
    response = Response(json_string, content_type="application/json; charset=utf-8" )
    return response

if __name__ == "__main__":
    app.run()