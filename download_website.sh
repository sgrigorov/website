#!/bin/bash
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --adjust-extension \
     --span-hosts \
     --convert-links \
     --domains squarespace.com,squarespace-cdn.com,naghedi-immigration.ca \
  https://www.naghedi-immigration.ca/