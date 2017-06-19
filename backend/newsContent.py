# -*- coding: utf-8 -*-
"""
Created on Tue May 23 16:41:13 2017
"""
# -*- coding: utf-8 -*-
import urllib.request
from lxml import html
from multiprocessing import pool, Queue

ofund_urls = Queue()
def newsContent(url):
    '''
    功能：伪装成浏览器并使用代理防屏蔽
    @url:目标URL
    @proxy_addr:代理服务器地址
    @iHeaders:浏览器头信息
    @timeoutSec：超时设置
    '''
    proxy_addr = "http://proxy.statestr.com:80/"
    proxy = urllib.request.ProxyHandler({"http":proxy_addr})
    opener = urllib.request.build_opener(proxy, urllib.request.HTTPHandler)
#    for cookie in cookies:
#        name,value = cookie
#        opener.addheaders(name, value)
    urllib.request.install_opener(opener)
    decodedata=None
    try:
        req = urllib.request.Request(url)
        data = urllib.request.urlopen(req).read()
        #print(chardet.detect(data))
        decodedata = data.decode("utf8")
        #print(decodedata)
    except urllib.error.HTTPError as er1:
        print("抓爬时发生HTTP错误，具体如下： ")
        print(er1)
    except urllib.error.URLError as er2:
        if hasattr(er2, "code"):
            print("URLError异常代码:")
            print(er2.code)
        if hasattr(er2, "reason"):
            print("URLError异常原因:")
            print(er2.reason)
    return decodedata
url = "http://tech.sina.com.cn/zl/post/detail/m/2017-05-23/pid_8511068.htm"
data = newsContent(url)
