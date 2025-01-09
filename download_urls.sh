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
  $1
