---
layout: post
title:  "Old Vulnerabilities:  PHF"
date:   2024-04-27 09:31:00 -0400
categories: vulnerability
---

We think we have it bad now with some of the vulnerabilities out now, most recently Palo Alto and Cisco have had major SSL VPN vulnerabilities, but at least we have security now.

1990s security was just about non-existent.  [The phf-cgi](https://insecure.org/sploits/phf-cgi.html) vulnerability is a good example.

Linux and other Unix OS's used to come with many services running by default, and if you installed the apache web server, it would also have some neat scripts available by default.

The scripts would be usually written in perl and reside in a cgi-bin directory (Common Gateway Interface).  An awesome script usually included by default was named phf.

I'm not sure what the purpose of this script was, but most people would use it to cat files on the system, usually the password file.

It's just crazy comparing security back then to security now.