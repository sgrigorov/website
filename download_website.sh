#!/bin/bash
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --adjust-extension \
     --span-hosts \
     --convert-links \
     --directory-prefix=dir1 \
     --domains squarespace.com,squarespace-cdn.com,naghedi-immigration.ca \
  https://www.naghedi-immigration.ca/

# wget \
#      --recursive \
#      --no-clobber \
#      --page-requisites \
#      --adjust-extension \
#      --span-hosts \
#      --convert-links \
#      --directory-prefix=dir2 \
#      --domains round-chartreuse-77zl.squarespace.com \
#      --no-parent \
#      --password=password \
#         round-chartreuse-77zl.squarespace.com

wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --adjust-extension \
     --span-hosts \
     --convert-links \
     --directory-prefix=dir3 \
     --no-host-directories \
     --domains squarespace.com,squarespace-cdn.com,naghedi-immigration.ca \
  www.naghedi-immigration.ca

wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --adjust-extension \
     --span-hosts \
     --convert-links \
     --directory-prefix=dir3 \
     --no-host-directories \
     --domains squarespace.com,naghedi-immigration.ca \
  www.naghedi-immigration.ca
