# Dockerfile

# 使用官方Node.js镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 暴露应用程序端口
EXPOSE 3000

# 运行应用程序
CMD ["npm", "start"]
