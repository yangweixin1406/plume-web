#!/bin/bash
if [ -d "dist" ]; then
    echo "正在运行"
else
    echo "运行失败，无前端文件夹"
fi
echo "服务正常"
exit 0
