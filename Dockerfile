# 使用nginx作为基础镜像
FROM nginx

# 将目录中的dist文件夹和default.conf配置文件复制到容器的/etc/nginx/目录下
RUN mkdir /usr/share/nginx/html/dist
COPY  dist /usr/share/nginx/html/dist
COPY ./default.conf /etc/nginx/conf.d/default.conf


# 暴露80端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]
