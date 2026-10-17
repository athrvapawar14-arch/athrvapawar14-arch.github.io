
---
title: "My Accidental Journey With Docker"
description: "A record of how I went from blindly running Docker commands to finally understanding why I was using it."
pubDate: 2026-09-07
tags:
  - docker
  - containerization 
  - learning

---

# Introduction

My first encounter with Docker was back in March of 2026. I was exploring the use of different automations and customizations back then. And one of the recommendations was about Ollama+WebUI and n8n.

Back then (perhaps even now), I was not very well versed with the AI and LLM tools, terminologies and internals. I was just excited to have a model that I can run locally in my laptop and have a nice UI to view it. I did not appreciate the terminal screen back then. 😶

- **The Ollama Model running in laptop**: I could not take the screenshots cause running them alone was killing my poor laptop. 😶😶😶😶


![[Pasted image 20260907132853.png|508]]



- **The Docker Desktop Doing something : 

![[Pasted image 20260907133314.png|526]]


- **The WebUI up and running :** 

![[Pasted image 20260907132444.png|538]]


- **BONUS**: An image of custom UI I made for replacing WebUI, before learning I was terrible at frontend designing. 

![[7e4260fa-0635-4d84-a796-f29eff5f1c3d.png|542]]


I had to install docker and then WSL to support docker, and then make the containers. And finally I was able to test the models from my laptop and phone. I always thought it was some convoluted way to make things work. 

My next encounter was when I was trying out the n8n automation. I was frustrated with how many hackathon alerts I was missing due to chaotic Whatsapp groups. 

Hence, I wanted to use n8n to filter the messages I would be sending to a telegram node, and then replay back if a hackathon is present, and registration details and deadlines. I was of the impression that I would be disciplined enough to do this process everyday. Consequently, I had to use docker to host the n8n after it was installed. 

- **The Docker Desktop :**  The image of docker doing its work. 

![[Pasted image 20260907135126.png|574]]

- **n8n Initial workflow :**  The most basic workflow. 

![[3fb8e0e9-b3ad-4171-94f0-9e37597b3314.png|582]]


It worked excellently, I followed the instructions of ChatGPT and got it up and running. And with Docker Desktop, I could just toggle it on and off easily. But then I learnt about my dying C drive and lack of RAM. Turns out docker by default is installed in the main drive( the OS drive, in my case it was C drive ) and I quickly discovered that Docker Desktop, its images, containers, volumes and the applications running inside them could consume a significant amount of storage and memory. 

Hence, in my frustration I deleted docker, and started using n8n using a .bat script. It is easier but, the script takes ages to launch n8n. Still better than losing resources to docker. 

**PS :** Turns out I used n8n first time for n8n. And for Ollama + WebUI later. Well... I do have a terrible memory. 

The next time I encountered docker was when I had to use blockchain, Hyperledger, for a demonstration of blockchain for storing log entries. It was a bit complicated. But, docker helped in initiating the blockchain. 

- **Docker running the blockchain :** I was supposed to test if blockchain can be used for storing logs. It was a dead-end in a way, but it introduced the concept of blockchain to me.

![[Pasted image 20260907135810.png|591]]

- **The Hyperledger Fabric Blockchain:** Here is a demo of running blockchain. I did not go further in it as the idea was scrapped. 

![[image(108).png|589]]

![[image(109)(1).png|594]]


And the most recent use of Docker for me was during the internship, it was to run grafana, prometheus, ELK stack, and other observability tools on my laptop. It was at that moment that I learnt to appreciate Docker. It took only 30 min to launch these tools and as I just needed to make the docker-compose.yml files. And then run the commands. Done. 

- **Internship Glimpse:**  As we can see a few proper files and we have the docker containers doing the heavy lifting. 

![[Pasted image 20260907141047.png|595]]
![[Pasted image 20260907140825.png|597]]


I had to observe as my fellow intern was struggling to get her setup running by having to manually install and configure the settings. With docker it was done in a matter of minutes. 
# What I learnt : 

One of the core ideas I have noticed with Docker is that containers allow applications to run in a consistent environment wherever Docker is available and compatible with the application. It reminds me somewhat of Java and the JVM: rather than depending entirely on the underlying environment, there is another layer providing a consistent runtime environment.

I also find myself comparing Docker images and containers to classes and objects in OOP. An image feels somewhat like a blueprint, while a container is an instance created from that image. The analogy isn't exact, but it helped me understand the relationship.

# What I don't know :

Currently there are many things about docker that I have no idea about. Like how to handle docker files. The code used to make them, etc. So it is going to be a long process. 

# What I am planning on learning : 

Now, I am learning how to make my own docker images. And how some of its internals work. As most of the journey so far has been about just running some AI generated script and hoping it works. 