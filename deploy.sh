#!/bin/bash
tar -czvf home.tar.gz .

scp -i ~/.ssh/bitcoin.pem home.tar.gz ubuntu@54.234.246.200:/home/ubuntu

echo "upload home page finished!"