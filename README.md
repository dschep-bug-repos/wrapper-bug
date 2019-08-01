# wrapper-bug

A minimal recreation of the wrapper bug fixed in `@serverless/enterprise-plugin@1.3.4`.

```
$ sls invoke -f unwrapped --log
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v1.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
--------------------------------------------------------------------
START RequestId: ff19f6b4-781d-4952-b054-15060028e0ae Version: $LATEST
END RequestId: ff19f6b4-781d-4952-b054-15060028e0ae
REPORT RequestId: ff19f6b4-781d-4952-b054-15060028e0ae      Duration: 7.60 ms       Billed Duration: 100 ms         Memory Size: 1024 MB    Max Memory Used: 73 MB


$ sls invoke -f wrapped --log
{
    "errorMessage": "2019-08-01T14:28:11.417Z 2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c Task timed out after 6.01 seconds"
}
--------------------------------------------------------------------
START RequestId: 2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c Version: $LATEST
2019-08-01 10:28:05.416 (-04:00)        2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c    INFO    did something!
END RequestId: 2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c
REPORT RequestId: 2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c      Duration: 6006.18 ms    Billed Duration: 6000 ms        Memory Size: 1024 MB    Max Memory Used: 73 MB

2019-08-01T14:28:11.417Z 2e5a2ee9-defc-4495-b3f7-1ae2fe5df91c Task timed out after 6.01 seconds



  Error --------------------------------------------------

  Invoked function failed

     For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Issues:        forum.serverless.com

  Your Environment Information ---------------------------
     Operating System:          darwin
     Node Version:              10.15.0
     Serverless Version:        1.49.0
     Enterprise Plugin Version: 1.3.5
     Platform SDK Version:      2.1.0

```
