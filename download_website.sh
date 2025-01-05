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
#      --domains naghedi-immigration.ca \
#      --no-parent \
#         www.naghedi-immigration.ca

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
