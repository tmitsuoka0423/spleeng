#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SpleengServerlessStack } from '../lib/spleeng-serverless-stack';

const app = new cdk.App();
new SpleengServerlessStack(app, 'SpleengServerlessStack');
