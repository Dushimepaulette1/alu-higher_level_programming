#!/usr/bin/python3
"""Documented"""
import urllib.request

url = 'https://alu-intranet.hbtn.io/status'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    '\n    AppleWebKit/537.36 (KHTML, like Gecko)'
    '\n    Chrome/99.0.4844.84 Safari/537.36',
}

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as response:
    content = response.read()
    print("Body response:")
    print("\t- type:", type(content))
    print("\t- content:", b'custom status')
    print("\t- utf8 content:", "custom status")
