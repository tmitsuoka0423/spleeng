import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";

export class SpleengServerlessStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lineBotWebhook = new lambda.Function(this, "spleeng-line-bot-webhook-function", {
      functionName: "spleeng-line-bot-webhook",
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: lambda.Code.asset("lambda/line-bot-webhook"),
    });

    new apigateway.LambdaRestApi(this, "spleeng-line-bot-webhook-api", {
      handler: lineBotWebhook,
    });
  }
}
