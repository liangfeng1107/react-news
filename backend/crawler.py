# -*- coding: utf-8 -*-
"""
Created on Mon May 22 14:34:35 2017
"""

import feedparser
import urllib.request

def crawler(url):
    proxy = urllib.request.ProxyHandler({"http":"[proxy]"}) // add you own proxy
    
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
    

        
