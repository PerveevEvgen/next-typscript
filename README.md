# Next typescript


## 🏃‍♂️ Simple start
1- clone repo

2- run ```npm i```

3- fill envs with your data

```
DATABASE_URL=""

AUTH_SECRET=""

GITHUB_CLIENT_ID=''
GITHUB_CLIENT_SECRET=''

GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''


RESEND_API_KEY=''
```
4- run command ```npm run dev```

## Project stack
### 🌕 Frontend
* NextJS
* Typescript
* React Hook Form
* radix-ui
* lucide-react
* tailwind
* zod

### 🌑 Backend
* NodeJS
* Typescript
* Prisma
* PostrgeSQL

## Project Overview

This is an educational Next.js project created to showcase my skills with the  JavaScript stack. The main goal of this project is to learn how Next.js works and build some simple but important features that exist in every real project. I decided to implement different authorization methods. This project uses the next-auth plugin and includes OAuth authorization with google and github providers, as well as regular authorization with credentials such as email and password. I also added some additional features such as password reset, 2FA, and a confirmation link feature.