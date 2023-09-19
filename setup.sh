#!/usr/bin/bash
kubectl create -f fluent-bit-configmap.yaml;
kubectl create -f fluent-bit-ds.yaml;
