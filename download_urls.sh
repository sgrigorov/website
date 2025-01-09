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
  https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/$1
