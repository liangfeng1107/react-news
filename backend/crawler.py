# -*- coding: utf-8 -*-
"""
Created on Mon May 22 14:34:35 2017

@author: a616148
"""

import feedparser
import urllib.request

def crawler(url):
    proxy = urllib.request.ProxyHandler({"http":"http://proxy.statestr.com:80/"})
    
    d = feedparser.parse(url, handlers = [proxy])
    
    newsList = [];
    i = 1;
    for entry in d.entries:
        news = {}
        news['id'] = i
        i = i + 1
        news['title'] = entry.title
        news['link'] = entry.link
        news['published'] = entry.published
        news['summary'] = entry.summary
        newsList.append(news)
        
    return newsList
    

        
