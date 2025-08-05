---
title: "Building a File Integrity Monitor: My First Python Security GUI"
author: "Pranish Biswakarma"
description: "How I learned about file integrity and built my own Python app to monitor file changes as a beginner cybersecurity and full stack coder."
---

## Introduction

Hi! I'm Pranish Biswakarma, and I love exploring cybersecurity and full stack development. Recently, I challenged myself to build a **file integrity monitor** using Python and Tkinter—a fun and powerful project that taught me about file security and desktop GUI programming.

---

## What is File Integrity Monitoring?

File Integrity Monitoring (FIM) is a security process that tracks changes to important files using cryptographic hashes. It's critical for detecting unauthorized modifications, tampering, or malware, and is widely used in professional cybersecurity.

---

## Why I Built This Project

- **Learn by doing:** I wanted to move beyond theory and build something real.
- **Real world use:** FIM is used everywhere, from companies to cyber forensics.
- **Skills:** Practice coding GUIs, using Python's `hashlib`, and organizing a project for GitHub.

---

## How I Built It (Step by Step)

1. **Set up Tkinter for the user interface** so anyone can run the app easily.
2. **Enable folder selection** using a simple dialog box.
3. **Walk through all files** in the chosen folder with `os.walk`, so subfolders are included.
4. **Hash each file** using SHA-256 (strong, secure hashing with Python’s `hashlib`).
5. **Display results** in a scrollable text area for easy reading.
6. **Organize code** so it’s easy to extend, share, and understand as a new coder.

---

## Here’s What the App Looks Like

![alt text](<Screenshot 2025-08-04 193818.png>)

---

## What I Learned

- **Tkinter** is super simple for quick desktop apps.
- **Hashing** is a central tool for file integrity.
- **GitHub workflows:** Sharing and documenting code is just as important as writing it.
- **Writing for others:** Blogging about a project really helps you understand it even more.

---

## The Code

You can find my project on [GitHub](https://github.com/PranishBiswakarma/File-Integrity-Monitor).  
Feel free to explore, use, or improve it!

---

## Next Steps

I’m planning to:
- Add baseline comparison to detect changes over time.
- Export/import hashes to files.
- Make the UI look even cooler.

---

## Conclusion

Building and documenting even the simplest tool is great practice for full stack and security careers!  
Thanks for reading—and wish me luck as I keep learning and sharing my journey.

*— Pranish Biswakarma*

