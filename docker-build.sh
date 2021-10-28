#! /usr/bin/env bash
set -e

REGISTRY="docker.pkg.github.com/noyss/demopackage"
IMAGE_NAME="angularapp"
TAG_DATETIME=$(date +%Y%m%d)
COMMIT_SHORT_SHA="$(git rev-parse --short HEAD)"

DOCKER_BUILDKIT=1 docker build --rm -f "Dockerfile" -t ${IMAGE_NAME} \
-t ${IMAGE_NAME}:${COMMIT_SHORT_SHA} \
-t ${IMAGE_NAME}:${TAG_DATETIME} \
-t ${REGISTRY}/${IMAGE_NAME} \
-t ${REGISTRY}/${IMAGE_NAME}:${COMMIT_SHORT_SHA} \
-t ${REGISTRY}/${IMAGE_NAME}:${TAG_DATETIME} .
