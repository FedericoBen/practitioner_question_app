const questions = [
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para gestionar bases de datos relacionales en la nube?",
    options: [
      { position: 1, option: "EC2" },
      { position: 2, option: "S3" },
      { position: 3, option: "RDS" },
      { position: 4, option: "Lambda" },
    ],
    answer: { position: 3, option: "RDS" },
    justification:
      "Amazon RDS (Relational Database Service) es el servicio de AWS específicamente diseñado para gestionar bases de datos relacionales en la nube, proporcionando una forma fácil de configurar, operar y escalar bases de datos relacionales como MySQL, PostgreSQL, Oracle, SQL Server, y Amazon Aurora.",
  },
  {
    question:
      "¿Qué servicio de AWS se utiliza para almacenar, administrar y distribuir contenido estático y dinámico a través de una red de entrega de contenido global?",
    options: [
      { position: 1, option: "S3" },
      { position: 2, option: "CloudFront" },
      { position: 3, option: "EC2" },
      { position: 4, option: "Route 53" },
    ],
    answer: { position: 2, option: "CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de CDN que se utiliza para almacenar en caché y distribuir contenido estático y dinámico a través de una red de servidores distribuidos globalmente para mejorar la velocidad de entrega y reducir la latencia.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones se utiliza para equilibrar la carga del tráfico entrante entre múltiples instancias de Amazon EC2?",
    options: [
      { position: 1, option: "S3" },
      { position: 2, option: "Route 53" },
      { position: 3, option: "ELB" },
      { position: 4, option: "IAM" },
    ],
    answer: { position: 3, option: "ELB" },
    justification:
      "Elastic Load Balancer (ELB) es el servicio de AWS que distribuye automáticamente el tráfico entrante de las aplicaciones entre varias instancias de Amazon EC2 para garantizar una alta disponibilidad y resistencia a fallos en tus aplicaciones web.",
  },
  {
    question:
      "¿Qué servicio de AWS proporciona una plataforma para ejecutar código sin necesidad de aprovisionar o administrar servidores?",
    options: [
      { position: 1, option: "S3" },
      { position: 2, option: "EC2" },
      { position: 3, option: "Lambda" },
      { position: 4, option: "RDS" },
    ],
    answer: { position: 3, option: "Lambda" },
    justification:
      "AWS Lambda permite ejecutar código sin aprovisionar ni administrar servidores. Se paga solo por el tiempo de computación consumido y no hay cargos cuando el código no se está ejecutando.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona almacenamiento de objetos altamente escalable y duradero?",
    options: [
      { position: 1, option: "EC2" },
      { position: 2, option: "S3" },
      { position: 3, option: "RDS" },
      { position: 4, option: "DynamoDB" },
    ],
    answer: { position: 2, option: "S3" },
    justification:
      "Amazon S3 (Simple Storage Service) proporciona almacenamiento de objetos altamente escalable y duradero. Es adecuado para una variedad de casos de uso, como almacenamiento de copias de seguridad, hosting de sitios web estáticos y almacenamiento de datos para aplicaciones móviles.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para crear, administrar y desplegar contenedores de aplicaciones de manera escalable?",
    options: [
      { position: 1, option: "S3" },
      { position: 2, option: "ECR" },
      { position: 3, option: "ECS" },
      { position: 4, option: "Lambda" },
    ],
    answer: { position: 3, option: "ECS" },
    justification:
      "Amazon Elastic Container Service (ECS) es un servicio de administración de contenedores altamente escalable que permite ejecutar y escalar contenedores Docker en la nube de AWS con facilidad.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para monitorizar y recopilar datos de rendimiento de las aplicaciones y sistemas en tiempo real?",
    options: [
      { position: 1, option: "CloudTrail" },
      { position: 2, option: "CloudWatch" },
      { position: 3, option: "Inspector" },
      { position: 4, option: "Trusted Advisor" },
    ],
    answer: { position: 2, option: "CloudWatch" },
    justification:
      "Amazon CloudWatch es un servicio de supervisión y observabilidad que se utiliza para recopilar y rastrear métricas, recopilar y monitorear logs, establecer alarmas y reaccionar automáticamente a los cambios en su entorno de AWS.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS utilizado para encriptar datos en reposo y en tránsito?",
    options: [
      { position: 1, option: "KMS" },
      { position: 2, option: "IAM" },
      { position: 3, option: "S3" },
      { position: 4, option: "Route 53" },
    ],
    answer: { position: 1, option: "KMS" },
    justification:
      "AWS Key Management Service (KMS) es un servicio de gestión de claves que te permite crear y controlar el cifrado de claves para tus datos en AWS. Puedes utilizar KMS para encriptar datos en reposo y en tránsito, y gestionar el acceso a las claves de cifrado.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona un sistema de correo electrónico escalable y alojado en la nube?",
    options: [
      { position: 1, option: "SES" },
      { position: 2, option: "SNS" },
      { position: 3, option: "SQS" },
      { position: 4, option: "EC2" },
    ],
    answer: { position: 1, option: "SES" },
    justification:
      "Amazon Simple Email Service (SES) es un servicio de correo electrónico escalable y alojado en la nube que te permite enviar correo electrónico de forma económica y fiable desde tus aplicaciones en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS que permite a los usuarios establecer políticas de acceso y controlar quién puede acceder a los recursos de AWS?",
    options: [
      { position: 1, option: "KMS" },
      { position: 2, option: "IAM" },
      { position: 3, option: "CloudTrail" },
      { position: 4, option: "VPC" },
    ],
    answer: { position: 2, option: "IAM" },
    justification:
      "AWS Identity and Access Management (IAM) es un servicio que te permite controlar de forma segura el acceso a los recursos de AWS. Con IAM, puedes crear y gestionar usuarios y grupos de usuarios, y asignar permisos para permitir o denegar el acceso a los recursos de AWS.",
  },
  {
    question:
      "¿Qué servicio de AWS se utiliza para almacenar y consultar datos de forma rápida y escalable, sin necesidad de administrar la infraestructura de la base de datos?",
    options: [
      { position: 1, option: "DynamoDB" },
      { position: 2, option: "S3" },
      { position: 3, option: "RDS" },
      { position: 4, option: "Redshift" },
    ],
    answer: { position: 1, option: "DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de base de datos NoSQL completamente administrado que ofrece rendimiento rápido y escalabilidad automática. No necesitas preocuparte por la infraestructura subyacente, ya que AWS administra el aprovisionamiento de recursos para ti.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para crear y administrar redes virtuales privadas en la nube?",
    options: [
      { position: 1, option: "Route 53" },
      { position: 2, option: "VPC" },
      { position: 3, option: "Direct Connect" },
      { position: 4, option: "API Gateway" },
    ],
    answer: { position: 2, option: "VPC" },
    justification:
      "Amazon Virtual Private Cloud (VPC) te permite crear una red virtual privada en la nube de AWS, incluyendo subredes, tablas de rutas y configuración de seguridad. Puedes controlar de forma precisa el tráfico de red y conectar tu VPC a tu infraestructura local utilizando una conexión VPN.",
  },
  {
    question:
      "¿Qué servicio de AWS se utiliza para enviar notificaciones push a dispositivos móviles, tablets y computadoras?",
    options: [
      { position: 1, option: "SNS" },
      { position: 2, option: "SQS" },
      { position: 3, option: "SES" },
      { position: 4, option: "API Gateway" },
    ],
    answer: { position: 1, option: "SNS" },
    justification:
      "Amazon Simple Notification Service (SNS) es un servicio de mensajería que se utiliza para enviar notificaciones push a dispositivos móviles, tablets, computadoras y otros endpoints. Puedes enviar mensajes individuales o mensajes a grupos de suscriptores.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS que proporciona monitoreo de seguridad continuo de tus recursos y configuraciones de AWS?",
    options: [
      { position: 1, option: "CloudTrail" },
      { position: 2, option: "Trusted Advisor" },
      { position: 3, option: "Inspector" },
      { position: 4, option: "GuardDuty" },
    ],
    answer: { position: 4, option: "GuardDuty" },
    justification:
      "Amazon GuardDuty es un servicio de monitoreo de seguridad que analiza continuamente tus cuentas de AWS en busca de actividades maliciosas o no autorizadas. Identifica comportamientos sospechosos y te proporciona alertas para que puedas responder rápidamente.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para realizar auditorías y garantizar el cumplimiento de las políticas de seguridad?",
    options: [
      { position: 1, option: "CloudTrail" },
      { position: 2, option: "Trusted Advisor" },
      { position: 3, option: "Inspector" },
      { position: 4, option: "Config" },
    ],
    answer: { position: 4, option: "Config" },
    justification:
      "AWS Config es un servicio que te ayuda a evaluar, auditar y evaluar el cumplimiento de las políticas de configuración de tus recursos de AWS. Te proporciona una visión detallada de los cambios en tu entorno de AWS y te permite evaluar y resolver problemas de configuración.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS utilizado para crear y gestionar flujos de trabajo de manera escalable?",
    options: [
      { position: 1, option: "S3" },
      { position: 2, option: "SQS" },
      { position: 3, option: "Step Functions" },
      { position: 4, option: "API Gateway" },
    ],
    answer: { position: 3, option: "Step Functions" },
    justification:
      "AWS Step Functions es un servicio que te permite coordinar fácilmente los componentes de tus aplicaciones distribuidas y microservicios utilizando flujos de trabajo visuales. Puedes construir flujos de trabajo escalables, paralelos y secuenciales sin escribir código complejo.",
  },
  {
    question:
      "¿Qué servicio de AWS se utiliza para almacenar y procesar grandes volúmenes de datos en clústeres distribuidos?",
    options: [
      { position: 1, option: "DynamoDB" },
      { position: 2, option: "Redshift" },
      { position: 3, option: "Athena" },
      { position: 4, option: "Glue" },
    ],
    answer: { position: 2, option: "Redshift" },
    justification:
      "Amazon Redshift es un servicio de almacenamiento de datos completamente administrado que te permite ejecutar consultas complejas y analizar grandes conjuntos de datos utilizando SQL estándar. Redshift es altamente escalable y te permite almacenar petabytes de datos a una fracción del costo de las soluciones tradicionales.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para procesar grandes volúmenes de datos en tiempo real?",
    options: [
      { position: 1, option: "Elasticsearch Service" },
      { position: 2, option: "Kinesis" },
      { position: 3, option: "Glue" },
      { position: 4, option: "Athena" },
    ],
    answer: { position: 2, option: "Kinesis" },
    justification:
      "Amazon Kinesis es un servicio que te permite recopilar, procesar y analizar grandes volúmenes de datos en tiempo real. Puedes utilizar Kinesis para ingestar datos de transmisión, procesarlos en tiempo real con análisis en tiempo real y almacenar los datos procesados en varios destinos.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS utilizado para indexar y buscar datos en tiempo real?",
    options: [
      { position: 1, option: "Elasticsearch Service" },
      { position: 2, option: "Kinesis" },
      { position: 3, option: "Glue" },
      { position: 4, option: "Athena" },
    ],
    answer: { position: 1, option: "Elasticsearch Service" },
    justification:
      "Amazon Elasticsearch Service es un servicio completamente administrado que te permite implementar, operar y escalar fácilmente clústeres de Elasticsearch en la nube de AWS. Puedes utilizar Elasticsearch para indexar y buscar datos en tiempo real con alta disponibilidad y escalabilidad.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para automatizar tareas de administración de infraestructura mediante la codificación de la infraestructura como código?",
    options: [
      { position: 1, option: "CloudFormation" },
      { position: 2, option: "Elastic Beanstalk" },
      { position: 3, option: "OpsWorks" },
      { position: 4, option: "CodeDeploy" },
    ],
    answer: { position: 1, option: "CloudFormation" },
    justification:
      "AWS CloudFormation es un servicio que te permite codificar tu infraestructura en formato JSON o YAML y automatizar la creación, actualización y eliminación de recursos de AWS de manera predecible y segura. Puedes utilizar CloudFormation para implementar y gestionar recursos de AWS de forma consistente y eficiente.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar y administrar contenedores Docker en la nube?",
    options: [
      { position: 1, option: "ECS" },
      { position: 2, option: "EKS" },
      { position: 3, option: "ECR" },
      { position: 4, option: "Fargate" },
    ],
    answer: { position: 1, option: "ECS" },
    justification:
      "Amazon Elastic Container Service (ECS) es un servicio de administración de contenedores que te permite ejecutar y escalar contenedores Docker en la nube de AWS. Puedes utilizar ECS para implementar y administrar fácilmente aplicaciones basadas en contenedores sin tener que preocuparte por la infraestructura subyacente.",
  },
  {
    question:
      "¿Qué servicio de AWS se utiliza para almacenar y procesar grandes volúmenes de datos en clústeres distribuidos?",
    options: [
      { position: 1, option: "DynamoDB" },
      { position: 2, option: "Redshift" },
      { position: 3, option: "Athena" },
      { position: 4, option: "Glue" },
    ],
    answer: { position: 2, option: "Redshift" },
    justification:
      "Amazon Redshift es un servicio de almacenamiento de datos completamente administrado que te permite ejecutar consultas complejas y analizar grandes conjuntos de datos utilizando SQL estándar. Redshift es altamente escalable y te permite almacenar petabytes de datos a una fracción del costo de las soluciones tradicionales.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para monitorizar y recopilar datos de rendimiento de las aplicaciones y sistemas en tiempo real?",
    options: [
      { position: 1, option: "CloudTrail" },
      { position: 2, option: "CloudWatch" },
      { position: 3, option: "Inspector" },
      { position: 4, option: "Trusted Advisor" },
    ],
    answer: { position: 2, option: "CloudWatch" },
    justification:
      "Amazon CloudWatch es un servicio de supervisión y observabilidad que se utiliza para recopilar y rastrear métricas, recopilar y monitorear logs, establecer alarmas y reaccionar automáticamente a los cambios en tu entorno de AWS.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS que permite a los usuarios establecer políticas de acceso y controlar quién puede acceder a los recursos de AWS?",
    options: [
      { position: 1, option: "KMS" },
      { position: 2, option: "IAM" },
      { position: 3, option: "S3" },
      { position: 4, option: "Route 53" },
    ],
    answer: { position: 2, option: "IAM" },
    justification:
      "AWS Identity and Access Management (IAM) es un servicio que te permite controlar de forma segura el acceso a los recursos de AWS. Con IAM, puedes crear y gestionar usuarios y grupos de usuarios, y asignar permisos para permitir o denegar el acceso a los recursos de AWS.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS utilizado para encriptar datos en reposo y en tránsito?",
    options: [
      { position: 1, option: "KMS" },
      { position: 2, option: "IAM" },
      { position: 3, option: "S3" },
      { position: 4, option: "Route 53" },
    ],
    answer: { position: 1, option: "KMS" },
    justification:
      "AWS Key Management Service (KMS) es un servicio de gestión de claves que te permite crear y controlar el cifrado de claves para tus datos en AWS. Puedes utilizar KMS para encriptar datos en reposo y en tránsito, y gestionar el acceso a las claves de cifrado.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS que se utiliza para enviar notificaciones de correo electrónico?",
    options: [
      { position: 1, option: "SES" },
      { position: 2, option: "SNS" },
      { position: 3, option: "SQS" },
      { position: 4, option: "Lambda" },
    ],
    answer: { position: 1, option: "SES" },
    justification:
      "Amazon Simple Email Service (SES) es un servicio de correo electrónico escalable y alojado en la nube que te permite enviar correo electrónico de forma económica y fiable desde tus aplicaciones en la nube.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar y escalar aplicaciones web y servicios en la nube?",
    options: [
      { position: 1, option: "EC2" },
      { position: 2, option: "ECS" },
      { position: 3, option: "Lambda" },
      { position: 4, option: "S3" },
    ],
    answer: { position: 2, option: "ECS" },
    justification:
      "Amazon Elastic Container Service (ECS) es un servicio de administración de contenedores que te permite ejecutar, escalar y administrar contenedores Docker en la nube de AWS. Puedes utilizar ECS para implementar y administrar fácilmente aplicaciones basadas en contenedores sin tener que preocuparte por la infraestructura subyacente.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para almacenar y procesar grandes volúmenes de datos en tiempo real?",
    options: [
      { position: 1, option: "DynamoDB" },
      { position: 2, option: "Redshift" },
      { position: 3, option: "Kinesis" },
      { position: 4, option: "Glue" },
    ],
    answer: { position: 3, option: "Kinesis" },
    justification:
      "Amazon Kinesis es un servicio que te permite recopilar, procesar y analizar grandes volúmenes de datos en tiempo real. Puedes utilizar Kinesis para ingestar datos de transmisión, procesarlos en tiempo real con análisis en tiempo real y almacenar los datos procesados en varios destinos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para indexar y buscar datos en tiempo real?",
    options: [
      { position: 1, option: "Elasticsearch Service" },
      { position: 2, option: "Kinesis" },
      { position: 3, option: "Glue" },
      { position: 4, option: "Athena" },
    ],
    answer: { position: 1, option: "Elasticsearch Service" },
    justification:
      "Amazon Elasticsearch Service es un servicio completamente administrado que te permite implementar, operar y escalar fácilmente clústeres de Elasticsearch en la nube de AWS. Puedes utilizar Elasticsearch para indexar y buscar datos en tiempo real con alta disponibilidad y escalabilidad.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un servicio de AWS utilizado para orquestar flujos de trabajo de datos?",
    options: [
      { position: 1, option: "Data Pipeline" },
      { position: 2, option: "EMR" },
      { position: 3, option: "Glue" },
      { position: 4, option: "Lambda" },
    ],
    answer: { position: 3, option: "Glue" },
    justification:
      "AWS Glue es un servicio de ETL (Extract, Transform, Load) completamente administrado que te permite orquestar flujos de trabajo de datos para la preparación y carga de datos en varios destinos. Glue es altamente escalable y puede procesar grandes volúmenes de datos de manera eficiente.",
  },
  {
    question:
      "¿Cuál de las siguientes es una de las áreas fundamentales del Well-Architected Framework de AWS?",
    options: [
      { position: 1, option: "Costo eficiente" },
      { position: 2, option: "Migración a la nube" },
      { position: 3, option: "Seguridad y conformidad" },
      { position: 4, option: "Inteligencia artificial" },
    ],
    answer: { position: 3, option: "Seguridad y conformidad" },
    justification:
      "El Well-Architected Framework de AWS se centra en cinco áreas fundamentales, una de las cuales es la seguridad y conformidad. Esto implica la implementación de controles de seguridad y la adhesión a las mejores prácticas de seguridad para proteger los datos y las aplicaciones en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las 6 R de migración a la nube según la metodología de AWS?",
    options: [
      { position: 1, option: "Reindex" },
      { position: 2, option: "Rehost" },
      { position: 3, option: "Redo" },
      { position: 4, option: "Revoke" },
    ],
    answer: { position: 2, option: "Rehost" },
    justification:
      "Rehost, también conocido como 'levantar y cambiar', es una de las 6 R de migración a la nube según la metodología de AWS. Implica mover las aplicaciones existentes a la nube sin realizar cambios significativos en el código o la arquitectura.",
  },
  {
    question:
      "¿Qué principio del Well-Architected Framework se refiere a la capacidad de responder automáticamente a los cambios en la demanda de recursos?",
    options: [
      { position: 1, option: "Seguridad" },
      { position: 2, option: "Eficiencia de rendimiento" },
      { position: 3, option: "Resiliencia" },
      { position: 4, option: "Gestión de costos" },
    ],
    answer: { position: 3, option: "Resiliencia" },
    justification:
      "La resiliencia, como principio del Well-Architected Framework, se refiere a la capacidad de una arquitectura para resistir y recuperarse automáticamente de las fallas. Esto incluye la capacidad de escalar automáticamente para satisfacer la demanda de recursos y mantener la disponibilidad incluso en caso de eventos inesperados.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es uno de los pilares del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Seguridad" },
      { position: 2, option: "Aprendizaje" },
      { position: 3, option: "Gobernanza" },
      { position: 4, option: "Comunidad" },
    ],
    answer: { position: 3, option: "Gobernanza" },
    justification:
      "La gobernanza es uno de los pilares del Marco de Adopción de la Nube (CAF) de AWS. Se refiere a establecer políticas y procedimientos para garantizar el uso eficiente, seguro y conforme de la nube. La gobernanza ayuda a mantener el control y la visibilidad sobre los recursos en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las prácticas recomendadas para la migración a la nube según las 6 R de AWS?",
    options: [
      { position: 1, option: "Rechazar" },
      { position: 2, option: "Replicar" },
      { position: 3, option: "Refactorizar" },
      { position: 4, option: "Reducir" },
    ],
    answer: { position: 3, option: "Refactorizar" },
    justification:
      "Refactorizar es una de las prácticas recomendadas para la migración a la nube según las 6 R de AWS. Implica volver a diseñar o reescribir aplicaciones para aprovechar las características nativas de la nube y optimizar el rendimiento, la escalabilidad y la eficiencia.",
  },
  {
    question:
      "¿Cuál de los siguientes principios del Well-Architected Framework se centra en minimizar los costos operativos mediante el uso eficiente de recursos?",
    options: [
      { position: 1, option: "Operaciones conscientes" },
      { position: 2, option: "Resiliencia" },
      { position: 3, option: "Eficiencia de rendimiento" },
      { position: 4, option: "Seguridad" },
    ],
    answer: { position: 1, option: "Operaciones conscientes" },
    justification:
      "Las operaciones conscientes, como principio del Well-Architected Framework, se centran en minimizar los costos operativos mediante el uso eficiente de recursos. Esto implica optimizar la capacidad, la utilización y la automatización para reducir los costos de mantenimiento y operación de la infraestructura en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las estrategias de migración a la nube según las 6 R de AWS?",
    options: [
      { position: 1, option: "Repensar" },
      { position: 2, option: "Reemplazar" },
      { position: 3, option: "Reclamar" },
      { position: 4, option: "Reconstruir" },
    ],
    answer: { position: 4, option: "Reconstruir" },
    justification:
      "Reconstruir es una de las estrategias de migración a la nube según las 6 R de AWS. Implica reescribir completamente una aplicación para aprovechar las ventajas de la nube, como la escalabilidad y la disponibilidad. Esta estrategia puede ser necesaria cuando las aplicaciones existentes no son adecuadas para la nube o tienen limitaciones significativas.",
  },
  {
    question:
      "¿Cuál de los siguientes es uno de los beneficios clave del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Automatización" },
      { position: 2, option: "Capacidad de proceso" },
      { position: 3, option: "Flexibilidad" },
      { position: 4, option: "Eficiencia" },
    ],
    answer: { position: 3, option: "Flexibilidad" },
    justification:
      "La flexibilidad es uno de los beneficios clave del Marco de Adopción de la Nube (CAF) de AWS. El CAF proporciona un marco flexible que puede adaptarse a las necesidades y requisitos específicos de cada organización, lo que permite una adopción exitosa y una migración suave a la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las áreas clave del Well-Architected Framework de AWS?",
    options: [
      { position: 1, option: "Desarrollo ágil" },
      { position: 2, option: "Escalabilidad automática" },
      { position: 3, option: "Infraestructura heredada" },
      { position: 4, option: "Comunicación interna" },
    ],
    answer: { position: 2, option: "Escalabilidad automática" },
    justification:
      "La escalabilidad automática es una de las áreas clave del Well-Architected Framework de AWS. Se refiere a la capacidad de una arquitectura para ajustar dinámicamente la capacidad de los recursos en función de la demanda, lo que garantiza un rendimiento óptimo y una experiencia del usuario consistente.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las prácticas recomendadas para la migración a la nube según las 6 R de AWS?",
    options: [
      { position: 1, option: "Retrasar" },
      { position: 2, option: "Rehacer" },
      { position: 3, option: "Recuperar" },
      { position: 4, option: "Reprocesar" },
    ],
    answer: { position: 2, option: "Rehacer" },
    justification:
      "Rehacer es una de las prácticas recomendadas para la migración a la nube según las 6 R de AWS. Implica volver a desarrollar una aplicación desde cero utilizando tecnologías y arquitecturas nativas de la nube. Esta estrategia puede ser necesaria cuando las aplicaciones existentes son obsoletas o no pueden adaptarse fácilmente a la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes áreas forma parte del Well-Architected Framework de AWS?",
    options: [
      { position: 1, option: "Gestión de proyectos" },
      { position: 2, option: "Seguridad y conformidad" },
      { position: 3, option: "Desarrollo ágil" },
      { position: 4, option: "Soporte técnico" },
    ],
    answer: { position: 2, option: "Seguridad y conformidad" },
    justification:
      "El Well-Architected Framework de AWS se compone de cinco pilares, uno de los cuales es la seguridad y conformidad. Este pilar se centra en la protección de datos y la adhesión a los estándares de seguridad para garantizar la integridad y la confidencialidad de los sistemas en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las 6R de migración a la nube según la metodología de AWS?",
    options: [
      { position: 1, option: "Rehost" },
      { position: 2, option: "Reconsolidate" },
      { position: 3, option: "Renounce" },
      { position: 4, option: "Reimagine" },
    ],
    answer: { position: 1, option: "Rehost" },
    justification:
      "Rehost, también conocido como 'levantar y cambiar', es una de las 6R de migración a la nube según la metodología de AWS. Implica mover aplicaciones existentes a la nube sin modificar su arquitectura, lo que puede ser útil para una migración rápida y mínimamente disruptiva.",
  },
  {
    question:
      "¿Cuál de los siguientes pilares forma parte del Well-Architected Framework de AWS y se refiere a la capacidad de recuperación ante fallos?",
    options: [
      { position: 1, option: "Eficiencia de rendimiento" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Resiliencia" },
      { position: 4, option: "Gestión de costos" },
    ],
    answer: { position: 3, option: "Resiliencia" },
    justification:
      "La resiliencia es uno de los pilares del Well-Architected Framework de AWS y se refiere a la capacidad de una arquitectura para resistir y recuperarse automáticamente de los fallos. Esto incluye la capacidad de escalar automáticamente para mantener la disponibilidad incluso en caso de eventos inesperados.",
  },
  {
    question:
      "¿Cuál de las siguientes áreas es uno de los pilares del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Desarrollo ágil" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Gobernanza" },
      { position: 4, option: "Soporte técnico" },
    ],
    answer: { position: 3, option: "Gobernanza" },
    justification:
      "La gobernanza es uno de los pilares del Marco de Adopción de la Nube (CAF) de AWS. Se refiere a establecer políticas y procedimientos para garantizar el uso eficiente, seguro y conforme de la nube. La gobernanza ayuda a mantener el control y la visibilidad sobre los recursos en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las prácticas recomendadas para la migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Retrasar" },
      { position: 2, option: "Reimaginar" },
      { position: 3, option: "Retirar" },
      { position: 4, option: "Refactorizar" },
    ],
    answer: { position: 4, option: "Refactorizar" },
    justification:
      "Refactorizar es una de las prácticas recomendadas para la migración a la nube según las 6R de AWS. Implica reestructurar el código de una aplicación para aprovechar las características nativas de la nube, lo que puede mejorar la eficiencia y la escalabilidad.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe uno de los beneficios clave del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Aumento de la complejidad" },
      { position: 2, option: "Rigidez en las operaciones" },
      { position: 3, option: "Agilidad empresarial" },
      { position: 4, option: "Reducción de la innovación" },
    ],
    answer: { position: 3, option: "Agilidad empresarial" },
    justification:
      "El Marco de Adopción de la Nube (CAF) de AWS ofrece una serie de beneficios, incluida la agilidad empresarial. Al adoptar prácticas y herramientas de la nube, las organizaciones pueden responder más rápidamente a las demandas del mercado y acelerar la innovación.",
  },
  {
    question:
      "¿Cuál de los siguientes principios del Well-Architected Framework de AWS se refiere a la capacidad de responder automáticamente a los cambios en la demanda de recursos?",
    options: [
      { position: 1, option: "Eficiencia de rendimiento" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Resiliencia" },
      { position: 4, option: "Escalabilidad automática" },
    ],
    answer: { position: 4, option: "Escalabilidad automática" },
    justification:
      "La escalabilidad automática es uno de los principios del Well-Architected Framework de AWS. Se refiere a la capacidad de una arquitectura para ajustar dinámicamente la capacidad de los recursos en función de la demanda, lo que garantiza un rendimiento óptimo y una experiencia del usuario consistente.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las estrategias de migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Rechazar" },
      { position: 2, option: "Reconstruir" },
      { position: 3, option: "Reproducir" },
      { position: 4, option: "Replantear" },
    ],
    answer: { position: 2, option: "Reconstruir" },
    justification:
      "Reconstruir es una de las estrategias de migración a la nube según las 6R de AWS. Implica volver a desarrollar una aplicación desde cero utilizando tecnologías y arquitecturas nativas de la nube. Esta estrategia puede ser necesaria cuando las aplicaciones existentes son obsoletas o no pueden adaptarse fácilmente a la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las áreas clave del Well-Architected Framework de AWS?",
    options: [
      { position: 1, option: "Desarrollo ágil" },
      { position: 2, option: "Escalabilidad automática" },
      { position: 3, option: "Infraestructura heredada" },
      { position: 4, option: "Comunicación interna" },
    ],
    answer: { position: 2, option: "Escalabilidad automática" },
    justification:
      "La escalabilidad automática es una de las áreas clave del Well-Architected Framework de AWS. Se refiere a la capacidad de una arquitectura para ajustar dinámicamente la capacidad de los recursos en función de la demanda, lo que garantiza un rendimiento óptimo y una experiencia del usuario consistente.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las prácticas recomendadas para la migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Reciclar" },
      { position: 2, option: "Revisar" },
      { position: 3, option: "Refactorizar" },
      { position: 4, option: "Reemplazar" },
    ],
    answer: { position: 4, option: "Reemplazar" },
    justification:
      "Reemplazar es una de las prácticas recomendadas para la migración a la nube según las 6R de AWS. Implica reemplazar una aplicación existente con una nueva solución basada en la nube, lo que puede ofrecer mejoras en el rendimiento, la escalabilidad y la eficiencia.",
  },
  {
    question:
      "¿Cuál de las siguientes áreas es uno de los pilares del Well-Architected Framework de AWS?",
    options: [
      { position: 1, option: "Desarrollo ágil" },
      { position: 2, option: "Seguridad y conformidad" },
      { position: 3, option: "Gestión de proyectos" },
      { position: 4, option: "Soporte técnico" },
    ],
    answer: { position: 2, option: "Seguridad y conformidad" },
    justification:
      "El Well-Architected Framework de AWS se compone de cinco pilares, uno de los cuales es la seguridad y conformidad. Este pilar se centra en la protección de datos y la adhesión a los estándares de seguridad para garantizar la integridad y la confidencialidad de los sistemas en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una de las 6R de migración a la nube según la metodología de AWS?",
    options: [
      { position: 1, option: "Rehost" },
      { position: 2, option: "Reimburse" },
      { position: 3, option: "Repurpose" },
      { position: 4, option: "Relinquish" },
    ],
    answer: { position: 1, option: "Rehost" },
    justification:
      "Rehost, también conocido como 'levantar y cambiar', es una de las 6R de migración a la nube según la metodología de AWS. Implica mover aplicaciones existentes a la nube sin modificar su arquitectura, lo que puede ser útil para una migración rápida y mínimamente disruptiva.",
  },
  {
    question:
      "¿Cuál de las siguientes áreas forma parte del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Desarrollo ágil" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Gobernanza" },
      { position: 4, option: "Soporte técnico" },
    ],
    answer: { position: 3, option: "Gobernanza" },
    justification:
      "La gobernanza es uno de los pilares del Marco de Adopción de la Nube (CAF) de AWS. Se refiere a establecer políticas y procedimientos para garantizar el uso eficiente, seguro y conforme de la nube. La gobernanza ayuda a mantener el control y la visibilidad sobre los recursos en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las prácticas recomendadas para la migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Reconsider" },
      { position: 2, option: "Revert" },
      { position: 3, option: "Retire" },
      { position: 4, option: "Rebuild" },
    ],
    answer: { position: 4, option: "Rebuild" },
    justification:
      "Rebuild es una de las prácticas recomendadas para la migración a la nube según las 6R de AWS. Implica reconstruir una aplicación desde cero utilizando tecnologías y arquitecturas nativas de la nube. Esta estrategia puede ofrecer mejoras en el rendimiento, la escalabilidad y la eficiencia.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe uno de los beneficios clave del Marco de Adopción de la Nube (CAF) de AWS?",
    options: [
      { position: 1, option: "Complejidad aumentada" },
      { position: 2, option: "Flexibilidad reducida" },
      { position: 3, option: "Innovación limitada" },
      { position: 4, option: "Eficiencia mejorada" },
    ],
    answer: { position: 4, option: "Eficiencia mejorada" },
    justification:
      "El Marco de Adopción de la Nube (CAF) de AWS ofrece una serie de beneficios, incluida la eficiencia mejorada. Al adoptar prácticas y herramientas de la nube, las organizaciones pueden optimizar los recursos, reducir los costos operativos y mejorar la productividad.",
  },
  {
    question:
      "¿Cuál de los siguientes principios forma parte del Well-Architected Framework de AWS y se centra en minimizar los costos operativos?",
    options: [
      { position: 1, option: "Eficiencia de rendimiento" },
      { position: 2, option: "Resiliencia" },
      { position: 3, option: "Operaciones conscientes" },
      { position: 4, option: "Seguridad" },
    ],
    answer: { position: 3, option: "Operaciones conscientes" },
    justification:
      "Las operaciones conscientes, como principio del Well-Architected Framework de AWS, se centran en minimizar los costos operativos mediante el uso eficiente de recursos. Esto implica optimizar la capacidad, la utilización y la automatización para reducir los costos de mantenimiento y operación de la infraestructura en la nube.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las estrategias de migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Reimaginar" },
      { position: 2, option: "Retirar" },
      { position: 3, option: "Retener" },
      { position: 4, option: "Refinanciar" },
    ],
    answer: { position: 1, option: "Reimaginar" },
    justification:
      "Reimaginar es una de las estrategias de migración a la nube según las 6R de AWS. Implica repensar y rediseñar completamente una aplicación para aprovechar al máximo las capacidades de la nube. Esta estrategia puede ser necesaria para lograr innovación y transformación digital en las organizaciones.",
  },
  {
    question:
      "¿Cuál de los siguientes principios del Well-Architected Framework de AWS se refiere a la capacidad de recuperación ante fallos?",
    options: [
      { position: 1, option: "Eficiencia de rendimiento" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Resiliencia" },
      { position: 4, option: "Escalabilidad automática" },
    ],
    answer: { position: 3, option: "Resiliencia" },
    justification:
      "La resiliencia es uno de los principios del Well-Architected Framework de AWS. Se refiere a la capacidad de una arquitectura para resistir y recuperarse automáticamente de los fallos. Esto incluye la capacidad de escalar automáticamente para mantener la disponibilidad incluso en caso de eventos inesperados.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las prácticas recomendadas para la migración a la nube según las 6R de AWS?",
    options: [
      { position: 1, option: "Reconstruir" },
      { position: 2, option: "Revocar" },
      { position: 3, option: "Rechazar" },
      { position: 4, option: "Reformar" },
    ],
    answer: { position: 1, option: "Reconstruir" },
    justification:
      "Reconstruir es una de las prácticas recomendadas para la migración a la nube según las 6R de AWS. Implica reescribir una aplicación desde cero utilizando tecnologías y arquitecturas nativas de la nube. Esta estrategia puede ser necesaria para optimizar el rendimiento y la escalabilidad en la nube.",
  },
  {
    question:
      "¿Cuál es el impacto potencial de no seguir las prácticas recomendadas de seguridad del Well-Architected Framework en un entorno de nube altamente escalable?",
    options: [
      { position: 1, option: "Pérdida de eficiencia operativa" },
      { position: 2, option: "Aumento de los costos de mantenimiento" },
      {
        position: 3,
        option: "Exposición a brechas de seguridad y violaciones de datos",
      },
      { position: 4, option: "Reducción de la disponibilidad del sistema" },
    ],
    answer: {
      position: 3,
      option: "Exposición a brechas de seguridad y violaciones de datos",
    },
    justification:
      "En un entorno de nube altamente escalable, no seguir las prácticas recomendadas de seguridad del Well-Architected Framework puede exponer a la organización a brechas de seguridad y violaciones de datos, lo que podría tener graves repercusiones en términos de pérdida de datos confidenciales, daño a la reputación y posibles sanciones regulatorias.",
  },
  {
    question:
      "¿Cuál de las siguientes estrategias de migración a la nube se consideraría la más disruptiva pero potencialmente la más transformadora?",
    options: [
      { position: 1, option: "Rehost" },
      { position: 2, option: "Replatform" },
      { position: 3, option: "Refactor" },
      { position: 4, option: "Repurchase" },
    ],
    answer: { position: 3, option: "Refactor" },
    justification:
      "La estrategia de migración a la nube 'Refactor' se considera la más disruptiva pero potencialmente la más transformadora. Implica reescribir o rediseñar completamente una aplicación para aprovechar al máximo las capacidades nativas de la nube, lo que puede conducir a mejoras significativas en la eficiencia, la escalabilidad y la innovación.",
  },
  {
    question:
      "¿Cuál es uno de los principales beneficios de establecer un marco de gobernanza sólido dentro del Marco de Adopción de la Nube?",
    options: [
      { position: 1, option: "Reducción de la agilidad empresarial" },
      { position: 2, option: "Aumento de la complejidad operativa" },
      {
        position: 3,
        option:
          "Mejora de la visibilidad y el control de los recursos en la nube",
      },
      {
        position: 4,
        option: "Incremento de la exposición a riesgos de seguridad",
      },
    ],
    answer: {
      position: 3,
      option:
        "Mejora de la visibilidad y el control de los recursos en la nube",
    },
    justification:
      "Establecer un marco de gobernanza sólido dentro del Marco de Adopción de la Nube permite mejorar la visibilidad y el control de los recursos en la nube. Esto facilita la toma de decisiones informadas, garantiza el cumplimiento de políticas y normativas, y optimiza el uso de los recursos para maximizar el valor empresarial.",
  },
  {
    question:
      "¿Cuál de las siguientes estrategias de migración a la nube se centra principalmente en la modernización de la arquitectura de aplicaciones y la adopción de prácticas de desarrollo ágil?",
    options: [
      { position: 1, option: "Repurchase" },
      { position: 2, option: "Refactor" },
      { position: 3, option: "Retain" },
      { position: 4, option: "Retire" },
    ],
    answer: { position: 2, option: "Refactor" },
    justification:
      "La estrategia de migración a la nube 'Refactor' se centra principalmente en la modernización de la arquitectura de aplicaciones y la adopción de prácticas de desarrollo ágil. Esto implica reescribir o rediseñar aplicaciones existentes para aprovechar al máximo las capacidades de la nube y mejorar la agilidad empresarial.",
  },
  {
    question:
      "¿Cuál de los siguientes pilares del Well-Architected Framework se relaciona más estrechamente con la capacidad de un sistema para adaptarse a los cambios en la demanda de recursos?",
    options: [
      { position: 1, option: "Operaciones conscientes" },
      { position: 2, option: "Seguridad" },
      { position: 3, option: "Eficiencia de rendimiento" },
      { position: 4, option: "Resiliencia" },
    ],
    answer: { position: 3, option: "Eficiencia de rendimiento" },
    justification:
      "El pilar del Well-Architected Framework que se relaciona más estrechamente con la capacidad de un sistema para adaptarse a los cambios en la demanda de recursos es la 'Eficiencia de rendimiento'. Esto implica optimizar el uso de recursos para garantizar un rendimiento óptimo y minimizar los costos operativos.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe una de las mejores prácticas para asegurar la resiliencia en una arquitectura en la nube altamente escalable?",
    options: [
      {
        position: 1,
        option: "Dependencia exclusiva de un proveedor de servicios en la nube",
      },
      {
        position: 2,
        option: "Implementación de redundancia y failover automatizados",
      },
      {
        position: 3,
        option: "Eliminación de la monitorización y el análisis de registros",
      },
      {
        position: 4,
        option: "Uso de recursos subdimensionados para reducir costos",
      },
    ],
    answer: {
      position: 2,
      option: "Implementación de redundancia y failover automatizados",
    },
    justification:
      "Una de las mejores prácticas para asegurar la resiliencia en una arquitectura en la nube altamente escalable es la implementación de redundancia y failover automatizados. Esto garantiza la disponibilidad continua del sistema incluso en caso de fallos de componentes individuales o de infraestructura.",
  },
  {
    question:
      "¿Cuál de las siguientes estrategias de migración a la nube es más adecuada para aplicaciones que ya no son necesarias o relevantes para el negocio?",
    options: [
      { position: 1, option: "Rehost" },
      { position: 2, option: "Refactor" },
      { position: 3, option: "Retire" },
      { position: 4, option: "Replatform" },
    ],
    answer: { position: 3, option: "Retire" },
    justification:
      "La estrategia de migración a la nube 'Retire' es más adecuada para aplicaciones que ya no son necesarias o relevantes para el negocio. Esta estrategia permite identificar y eliminar aplicaciones obsoletas o redundantes, lo que ayuda a simplificar el entorno de TI y reducir los costos operativos.",
  },
  {
    question:
      "¿Cuál es uno de los principales beneficios de implementar una estrategia de 'Replatform' durante la migración a la nube?",
    options: [
      { position: 1, option: "Aumento de la complejidad operativa" },
      { position: 2, option: "Mejora de la compatibilidad con la nube" },
      { position: 3, option: "Reducción de la agilidad empresarial" },
      {
        position: 4,
        option: "Incremento de la dependencia del proveedor de la nube",
      },
    ],
    answer: { position: 2, option: "Mejora de la compatibilidad con la nube" },
    justification:
      "Uno de los principales beneficios de implementar una estrategia de 'Replatform' durante la migración a la nube es la mejora de la compatibilidad con la nube. Esto implica realizar modificaciones mínimas en las aplicaciones para que funcionen de manera más eficiente en el entorno de la nube, lo que facilita su gestión y mantenimiento.",
  },
  {
    question:
      "¿Cuál de los siguientes elementos es fundamental para el éxito de una estrategia de adopción de la nube a nivel empresarial?",
    options: [
      { position: 1, option: "Falta de compromiso ejecutivo" },
      {
        position: 2,
        option: "Ausencia de un plan de formación y capacitación",
      },
      { position: 3, option: "Resistencia al cambio por parte del personal" },
      {
        position: 4,
        option: "Comprensión y apoyo cultural desde la alta dirección",
      },
    ],
    answer: {
      position: 4,
      option: "Comprensión y apoyo cultural desde la alta dirección",
    },
    justification:
      "La comprensión y el apoyo cultural desde la alta dirección son fundamentales para el éxito de una estrategia de adopción de la nube a nivel empresarial. Esto implica fomentar una cultura organizacional que valore la innovación, la colaboración y la adaptabilidad, lo que facilita la transición hacia un entorno basado en la nube.",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre las instancias reservadas y las instancias spot de Amazon EC2?",
    options: [
      {
        position: 1,
        option:
          "Las instancias reservadas tienen un precio fijo, mientras que las instancias spot tienen un precio variable basado en la oferta y la demanda del mercado.",
      },
      {
        position: 2,
        option:
          "Las instancias spot tienen una capacidad de cómputo fija, mientras que las instancias reservadas pueden escalar automáticamente según la demanda.",
      },
      {
        position: 3,
        option:
          "Las instancias reservadas están diseñadas para cargas de trabajo intermitentes, mientras que las instancias spot son más adecuadas para cargas de trabajo continuas.",
      },
      {
        position: 4,
        option:
          "Las instancias spot garantizan una alta disponibilidad y rendimiento, mientras que las instancias reservadas pueden experimentar interrupciones ocasionales.",
      },
    ],
    answer: {
      position: 1,
      option:
        "Las instancias reservadas tienen un precio fijo, mientras que las instancias spot tienen un precio variable basado en la oferta y la demanda del mercado.",
    },
    justification:
      "La principal diferencia entre las instancias reservadas y las instancias spot de Amazon EC2 es que las instancias reservadas tienen un precio fijo, generalmente con un compromiso a largo plazo, mientras que las instancias spot tienen un precio variable que se basa en las fluctuaciones del mercado y puede ser significativamente más bajo, pero no garantiza la disponibilidad continua.",
  },
  {
    question:
      "¿Qué ventajas ofrece Amazon S3 Intelligent-Tiering sobre las clases de almacenamiento estándar y Glacier?",
    options: [
      {
        position: 1,
        option: "Mayor durabilidad y disponibilidad de los datos almacenados",
      },
      {
        position: 2,
        option: "Menores costos de almacenamiento para datos poco accesibles",
      },
      {
        position: 3,
        option:
          "Automatización del movimiento de objetos entre clases de almacenamiento según el acceso",
      },
      {
        position: 4,
        option: "Mayor seguridad y encriptación de los datos almacenados",
      },
    ],
    answer: {
      position: 3,
      option:
        "Automatización del movimiento de objetos entre clases de almacenamiento según el acceso",
    },
    justification:
      "Amazon S3 Intelligent-Tiering ofrece ventajas sobre las clases de almacenamiento estándar y Glacier al proporcionar una automatización del movimiento de objetos entre clases de almacenamiento según el acceso. Esto permite optimizar los costos de almacenamiento al mantener automáticamente los datos más accesibles en clases de almacenamiento más costosas y los datos menos accesibles en clases de almacenamiento más económicas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se considera un servicio serverless?",
    options: [
      { position: 1, option: "Amazon EC2" },
      { position: 2, option: "Amazon RDS" },
      { position: 3, option: "AWS Lambda" },
      { position: 4, option: "Amazon ECS" },
    ],
    answer: { position: 3, option: "AWS Lambda" },
    justification:
      "AWS Lambda se considera un servicio serverless, ya que permite ejecutar código sin preocuparse por la gestión de servidores subyacentes. Con Lambda, solo pagas por el tiempo de ejecución de tu código, lo que lo hace ideal para cargas de trabajo event-driven y altamente escalables.",
  },
  {
    question:
      "¿Cuál de las siguientes características se asocia con una arquitectura serverless en AWS?",
    options: [
      {
        position: 1,
        option: "Gestión manual de la infraestructura subyacente",
      },
      { position: 2, option: "Elasticidad automática según la demanda" },
      {
        position: 3,
        option:
          "Requisito de aprovisionamiento de servidores previo a la implementación",
      },
      {
        position: 4,
        option: "Necesidad de monitoreo y ajuste manual de la capacidad",
      },
    ],
    answer: { position: 2, option: "Elasticidad automática según la demanda" },
    justification:
      "Una de las características clave de una arquitectura serverless en AWS es la elasticidad automática según la demanda. Esto significa que los recursos se escalan automáticamente para manejar picos de carga y se reducen cuando la demanda disminuye, sin necesidad de intervención manual por parte del usuario.",
  },
  {
    question: "¿Qué es una VPC (Virtual Private Cloud) en el contexto de AWS?",
    options: [
      {
        position: 1,
        option:
          "Un servicio de almacenamiento en la nube para archivos y datos",
      },
      {
        position: 2,
        option: "Una red virtual aislada y personalizable dentro de AWS",
      },
      {
        position: 3,
        option:
          "Un servicio de bases de datos relacional totalmente administrado",
      },
      {
        position: 4,
        option: "Una instancia de servidor virtual escalable en la nube",
      },
    ],
    answer: {
      position: 2,
      option: "Una red virtual aislada y personalizable dentro de AWS",
    },
    justification:
      "Una VPC (Virtual Private Cloud) en el contexto de AWS es una red virtual aislada y personalizable que permite a los usuarios lanzar recursos de AWS, como instancias EC2, dentro de un entorno virtual que es completamente controlado por el usuario. Proporciona un nivel adicional de seguridad y aislamiento para los recursos en la nube.",
  },
  {
    question:
      "¿Cuál de los siguientes componentes se utiliza para controlar el tráfico de red dentro de una VPC en AWS?",
    options: [
      { position: 1, option: "ACL (Access Control List)" },
      { position: 2, option: "ALB (Application Load Balancer)" },
      { position: 3, option: "IAM (Identity and Access Management)" },
      { position: 4, option: "CloudFront (Content Delivery Network)" },
    ],
    answer: { position: 1, option: "ACL (Access Control List)" },
    justification:
      "Las ACL (Access Control Lists) se utilizan para controlar el tráfico de red dentro de una VPC en AWS. Actúan como firewalls a nivel de subnet y permiten definir reglas de entrada y salida para permitir o denegar el tráfico según las necesidades de seguridad de la red.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el propósito de los grupos de seguridad en AWS?",
    options: [
      {
        position: 1,
        option:
          "Controlar el acceso a recursos físicos en un centro de datos de AWS",
      },
      {
        position: 2,
        option:
          "Proporcionar un mecanismo para cifrar datos en reposo en AWS S3",
      },
      {
        position: 3,
        option:
          "Definir políticas de control de acceso a nivel de usuario en AWS IAM",
      },
      {
        position: 4,
        option:
          "Gestionar reglas de firewall para instancias EC2 dentro de una VPC",
      },
    ],
    answer: {
      position: 4,
      option:
        "Gestionar reglas de firewall para instancias EC2 dentro de una VPC",
    },
    justification:
      "Los grupos de seguridad en AWS se utilizan para gestionar reglas de firewall para instancias EC2 dentro de una VPC. Permiten definir qué tráfico está permitido o denegado hacia y desde las instancias EC2, lo que ayuda a controlar el acceso a los recursos y garantizar la seguridad de la red.",
  },
  {
    question:
      "¿Cuál es la diferencia clave entre una instancia dedicada y una instancia compartida en Amazon EC2?",
    options: [
      {
        position: 1,
        option:
          "Las instancias dedicadas ofrecen mejor rendimiento debido a la asignación exclusiva de recursos físicos.",
      },
      {
        position: 2,
        option:
          "Las instancias compartidas proporcionan una mayor flexibilidad en la configuración de recursos virtuales.",
      },
      {
        position: 3,
        option:
          "Las instancias dedicadas son más económicas debido a la compartición de recursos físicos.",
      },
      {
        position: 4,
        option:
          "Las instancias compartidas garantizan una mayor seguridad mediante el aislamiento de recursos físicos.",
      },
    ],
    answer: {
      position: 1,
      option:
        "Las instancias dedicadas ofrecen mejor rendimiento debido a la asignación exclusiva de recursos físicos.",
    },
    justification:
      "La diferencia clave entre una instancia dedicada y una instancia compartida en Amazon EC2 es que las instancias dedicadas ofrecen mejor rendimiento debido a la asignación exclusiva de recursos físicos, lo que garantiza un mayor aislamiento y control sobre los recursos subyacentes.",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de almacenamiento de Amazon S3 es más adecuado para aplicaciones que requieren acceso frecuente a los datos con una latencia baja?",
    options: [
      { position: 1, option: "S3 Standard" },
      { position: 2, option: "S3 Standard-IA" },
      { position: 3, option: "S3 One Zone-IA" },
      { position: 4, option: "S3 Glacier" },
    ],
    answer: { position: 1, option: "S3 Standard" },
    justification:
      "S3 Standard es el tipo de almacenamiento de Amazon S3 más adecuado para aplicaciones que requieren acceso frecuente a los datos con una latencia baja. Ofrece alta durabilidad y disponibilidad, así como acceso inmediato a los datos almacenados.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se puede utilizar para implementar una aplicación serverless que responda a eventos en tiempo real?",
    options: [
      { position: 1, option: "AWS Lambda" },
      { position: 2, option: "Amazon EC2" },
      { position: 3, option: "Amazon RDS" },
      { position: 4, option: "Amazon ECS" },
    ],
    answer: { position: 1, option: "AWS Lambda" },
    justification:
      "AWS Lambda es el servicio de AWS que se puede utilizar para implementar una aplicación serverless que responda a eventos en tiempo real. Permite ejecutar código en respuesta a eventos de AWS y servicios externos sin la necesidad de aprovisionar o administrar servidores.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el concepto de autoescalado en AWS?",
    options: [
      {
        position: 1,
        option:
          "La capacidad de ajustar manualmente el tamaño de las instancias EC2 según la demanda de la aplicación.",
      },
      {
        position: 2,
        option:
          "El proceso de aprovisionar automáticamente nuevos recursos de EC2 para manejar picos de carga.",
      },
      {
        position: 3,
        option:
          "La capacidad de almacenar automáticamente copias de seguridad de los datos en Amazon S3.",
      },
      {
        position: 4,
        option:
          "El proceso de monitorear y ajustar manualmente el rendimiento de las funciones de AWS Lambda.",
      },
    ],
    answer: {
      position: 2,
      option:
        "El proceso de aprovisionar automáticamente nuevos recursos de EC2 para manejar picos de carga.",
    },
    justification:
      "El autoescalado en AWS es el proceso de aprovisionar automáticamente nuevos recursos de EC2 para manejar picos de carga. Permite que las aplicaciones escalen horizontalmente según la demanda para garantizar un rendimiento óptimo y una alta disponibilidad sin intervención manual.",
  },
  {
    question:
      "¿Cuál de las siguientes tecnologías de red se utiliza para conectar diferentes VPCs en la misma región de AWS?",
    options: [
      { position: 1, option: "VPC Peering" },
      { position: 2, option: "VPN (Virtual Private Network)" },
      { position: 3, option: "AWS Direct Connect" },
      { position: 4, option: "Amazon Route 53" },
    ],
    answer: { position: 1, option: "VPC Peering" },
    justification:
      "VPC Peering es la tecnología de red que se utiliza para conectar diferentes VPCs en la misma región de AWS. Permite establecer conexiones directas entre VPCs para compartir recursos y comunicarse de forma segura dentro de la red de AWS.",
  },
  {
    question:
      "¿Cuál de las siguientes características se asocia con una ACL (Access Control List) en AWS?",
    options: [
      {
        position: 1,
        option: "Definición de reglas de firewall a nivel de instancia EC2",
      },
      {
        position: 2,
        option: "Gestión de políticas de acceso a objetos en Amazon S3",
      },
      { position: 3, option: "Control de acceso a subredes dentro de una VPC" },
      {
        position: 4,
        option: "Administración de permisos de IAM a nivel de usuario",
      },
    ],
    answer: {
      position: 3,
      option: "Control de acceso a subredes dentro de una VPC",
    },
    justification:
      "Una ACL (Access Control List) en AWS se utiliza para controlar el acceso a subredes dentro de una VPC. Permite definir reglas de entrada y salida para permitir o denegar el tráfico de red según las necesidades de seguridad de la red.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el propósito de los grupos de seguridad en AWS?",
    options: [
      {
        position: 1,
        option:
          "Definición de políticas de control de acceso a nivel de usuario en AWS IAM",
      },
      {
        position: 2,
        option:
          "Gestión de reglas de firewall para instancias EC2 dentro de una VPC",
      },
      {
        position: 3,
        option: "Control de acceso a objetos en Amazon S3 a nivel de bucket",
      },
      {
        position: 4,
        option:
          "Configuración de reglas de enrutamiento para subredes en una VPC",
      },
    ],
    answer: {
      position: 2,
      option:
        "Gestión de reglas de firewall para instancias EC2 dentro de una VPC",
    },
    justification:
      "Los grupos de seguridad en AWS se utilizan para gestionar reglas de firewall para instancias EC2 dentro de una VPC. Permiten definir qué tráfico está permitido o denegado hacia y desde las instancias EC2, lo que ayuda a controlar el acceso a los recursos y garantizar la seguridad de la red.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza comúnmente para construir pipelines de CI/CD (Continuous Integration/Continuous Deployment)?",
    options: [
      { position: 1, option: "AWS CodePipeline" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "AWS Lambda" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "AWS CodePipeline" },
    justification:
      "AWS CodePipeline es el servicio de AWS específicamente diseñado para la creación de pipelines de CI/CD. Permite automatizar la compilación, prueba y entrega de código de forma rápida y confiable.",
  },
  {
    question:
      "¿Qué servicio de AWS se utilizaría para implementar una arquitectura de microservicios altamente escalable y de baja latencia?",
    options: [
      { position: 1, option: "Amazon ECS (Elastic Container Service)" },
      { position: 2, option: "Amazon SQS (Simple Queue Service)" },
      { position: 3, option: "AWS Lambda" },
      { position: 4, option: "Amazon RDS (Relational Database Service)" },
    ],
    answer: { position: 1, option: "Amazon ECS (Elastic Container Service)" },
    justification:
      "Amazon ECS es el servicio ideal para implementar una arquitectura de microservicios altamente escalable y de baja latencia. Permite orquestar y administrar contenedores Docker de forma eficiente en la nube de AWS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utilizaría para procesar grandes volúmenes de datos en tiempo real con una latencia ultrabaja?",
    options: [
      { position: 1, option: "Amazon EMR (Elastic MapReduce)" },
      { position: 2, option: "Amazon Kinesis" },
      { position: 3, option: "Amazon DynamoDB" },
      { position: 4, option: "Amazon Elasticache" },
    ],
    answer: { position: 2, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es el servicio de AWS diseñado específicamente para procesar grandes volúmenes de datos en tiempo real con una latencia ultrabaja. Permite recopilar, procesar y analizar datos de streaming en tiempo real para aplicaciones como análisis de clickstream, monitoreo de aplicaciones y análisis de logs.",
  },
  {
    question:
      "¿Qué servicio de AWS se utilizaría para implementar un sistema de reconocimiento de voz basado en inteligencia artificial?",
    options: [
      { position: 1, option: "Amazon Polly" },
      { position: 2, option: "Amazon Transcribe" },
      { position: 3, option: "Amazon Rekognition" },
      { position: 4, option: "Amazon Lex" },
    ],
    answer: { position: 4, option: "Amazon Lex" },
    justification:
      "Amazon Lex es el servicio de AWS utilizado para construir interfaces de conversación utilizando tecnología de reconocimiento de voz y comprensión del lenguaje natural. Permite crear chatbots y aplicaciones de voz interactivas de forma sencilla y escalable.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utilizaría para almacenar y compartir archivos de forma segura en la nube?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon EFS (Elastic File System)" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon FSx" },
    ],
    answer: { position: 2, option: "Amazon EFS (Elastic File System)" },
    justification:
      "Amazon EFS es el servicio de AWS utilizado para almacenar y compartir archivos de forma segura en la nube. Proporciona un sistema de archivos compartido que puede ser montado en múltiples instancias EC2 y contenedores Docker.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utilizaría para implementar una aplicación web altamente escalable con capacidad de autoscaling automático?",
    options: [
      { position: 1, option: "Amazon EC2" },
      { position: 2, option: "Amazon RDS" },
      { position: 3, option: "Amazon ECS" },
      { position: 4, option: "AWS Elastic Beanstalk" },
    ],
    answer: { position: 4, option: "AWS Elastic Beanstalk" },
    justification:
      "AWS Elastic Beanstalk es el servicio de AWS utilizado para implementar y administrar aplicaciones web altamente escalables con capacidad de autoscaling automático. Permite desplegar aplicaciones rápidamente y gestionar la infraestructura subyacente de forma automática.",
  },
  {
    question:
      "¿Qué servicio de AWS se utilizaría para implementar un sistema de correo electrónico escalable y seguro en la nube?",
    options: [
      { position: 1, option: "Amazon SES (Simple Email Service)" },
      { position: 2, option: "Amazon SNS (Simple Notification Service)" },
      { position: 3, option: "Amazon WorkMail" },
      { position: 4, option: "Amazon Pinpoint" },
    ],
    answer: { position: 1, option: "Amazon SES (Simple Email Service)" },
    justification:
      "Amazon SES es el servicio de AWS utilizado para implementar un sistema de correo electrónico escalable y seguro en la nube. Proporciona una infraestructura de envío de correo electrónico confiable y rentable para enviar y recibir correos electrónicos de forma masiva.",
  },
  {
    question:
      "¿Qué servicio de AWS se utilizaría para almacenar y procesar grandes conjuntos de datos estructurados en tiempo real?",
    options: [
      { position: 1, option: "Amazon RDS (Relational Database Service)" },
      { position: 2, option: "Amazon Redshift" },
      { position: 3, option: "Amazon DynamoDB" },
      { position: 4, option: "Amazon Aurora" },
    ],
    answer: { position: 2, option: "Amazon Redshift" },
    justification:
      "Amazon Redshift es el servicio de AWS utilizado para almacenar y procesar grandes conjuntos de datos estructurados en tiempo real. Proporciona un data warehouse completamente administrado y altamente escalable para análisis de big data.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utilizaría para implementar un sistema de mensajería push en tiempo real para aplicaciones móviles?",
    options: [
      { position: 1, option: "Amazon SNS (Simple Notification Service)" },
      { position: 2, option: "Amazon Pinpoint" },
      { position: 3, option: "Amazon MQ" },
      { position: 4, option: "Amazon Cognito" },
    ],
    answer: { position: 1, option: "Amazon SNS (Simple Notification Service)" },
    justification:
      "Amazon SNS es el servicio de AWS utilizado para implementar un sistema de mensajería push en tiempo real para aplicaciones móviles. Permite enviar notificaciones a dispositivos móviles, aplicaciones web y otros servicios de forma rápida y confiable.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utilizaría para implementar un sistema de monitoreo y registro centralizado de todos los recursos de AWS?",
    options: [
      { position: 1, option: "Amazon CloudWatch" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "Amazon Inspector" },
      { position: 4, option: "AWS X-Ray" },
    ],
    answer: { position: 1, option: "Amazon CloudWatch" },
    justification:
      "Amazon CloudWatch es el servicio de AWS utilizado para implementar un sistema de monitoreo y registro centralizado de todos los recursos de AWS. Permite supervisar el rendimiento de las aplicaciones, recopilar métricas operativas y generar alarmas basadas en umbrales personalizados.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una arquitectura sin servidor altamente escalable y completamente gestionada?",
    options: [
      { position: 1, option: "Amazon EC2" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon RDS" },
      { position: 4, option: "Amazon S3" },
    ],
    answer: { position: 2, option: "AWS Lambda" },
    justification:
      "AWS Lambda es el servicio de AWS que permite ejecutar código sin necesidad de aprovisionar ni administrar servidores. Es ideal para implementar arquitecturas sin servidor altamente escalables y completamente gestionadas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable con acceso instantáneo?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon EBS" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon DynamoDB" },
    ],
    answer: { position: 1, option: "Amazon S3" },
    justification:
      "Amazon S3 es el servicio de AWS utilizado para implementar un sistema de almacenamiento de datos altamente duradero y escalable con acceso instantáneo. Es ideal para almacenar una amplia variedad de datos, desde objetos estáticos hasta datos de aplicaciones.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una base de datos relacional completamente administrada y altamente escalable?",
    options: [
      { position: 1, option: "Amazon RDS" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Redshift" },
      { position: 4, option: "Amazon Aurora" },
    ],
    answer: { position: 1, option: "Amazon RDS" },
    justification:
      "Amazon RDS es el servicio de AWS utilizado para implementar una base de datos relacional completamente administrada y altamente escalable. Es ideal para aplicaciones que requieren una base de datos relacional tradicional con alta disponibilidad y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de streaming en tiempo real?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon SQS" },
      { position: 3, option: "AWS Glue" },
      { position: 4, option: "AWS Data Pipeline" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es el servicio de AWS utilizado para implementar un sistema de procesamiento de streaming en tiempo real. Es ideal para recopilar, procesar y analizar datos de streaming a gran escala, como datos de clickstream, logs y eventos de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de mensajería pub/sub (publicación/suscripción) para aplicaciones distribuidas?",
    options: [
      { position: 1, option: "Amazon SNS" },
      { position: 2, option: "Amazon SQS" },
      { position: 3, option: "AWS IoT Core" },
      { position: 4, option: "Amazon MQ" },
    ],
    answer: { position: 1, option: "Amazon SNS" },
    justification:
      "Amazon SNS es el servicio de AWS utilizado para implementar un sistema de mensajería pub/sub para aplicaciones distribuidas. Permite enviar mensajes a varios puntos de enlace, como correos electrónicos, SMS, HTTP endpoints y colas de SQS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de monitoreo y administración de recursos de AWS?",
    options: [
      { position: 1, option: "Amazon CloudWatch" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "Amazon Inspector" },
      { position: 4, option: "AWS Trusted Advisor" },
    ],
    answer: { position: 1, option: "Amazon CloudWatch" },
    justification:
      "Amazon CloudWatch es el servicio de AWS utilizado para implementar un sistema de monitoreo y administración de recursos de AWS. Permite supervisar el rendimiento de las aplicaciones, recopilar métricas operativas y generar alarmas basadas en umbrales personalizados.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una red privada virtual (VPN) para conectar la infraestructura local con los recursos de AWS?",
    options: [
      { position: 1, option: "AWS Direct Connect" },
      { position: 2, option: "Amazon VPC" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "Amazon CloudFront" },
    ],
    answer: { position: 1, option: "AWS Direct Connect" },
    justification:
      "AWS Direct Connect es el servicio de AWS utilizado para implementar una conexión de red privada entre la infraestructura local y los recursos de AWS. Proporciona un enlace dedicado de alta velocidad para acceder a los servicios de AWS de forma segura y confiable.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de identidad y acceso en la nube?",
    options: [
      { position: 1, option: "Amazon Cognito" },
      { position: 2, option: "AWS IAM" },
      { position: 3, option: "AWS Directory Service" },
      { position: 4, option: "Amazon GuardDuty" },
    ],
    answer: { position: 2, option: "AWS IAM" },
    justification:
      "AWS IAM (Identity and Access Management) es el servicio de AWS utilizado para implementar un sistema de administración de identidad y acceso en la nube. Permite controlar el acceso a los recursos de AWS mediante la creación y gestión de usuarios, grupos y roles.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos en memoria de alta velocidad y baja latencia?",
    options: [
      { position: 1, option: "Amazon ElastiCache" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Aurora" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon ElastiCache" },
    justification:
      "Amazon ElastiCache es el servicio de AWS utilizado para implementar un sistema de almacenamiento de datos en memoria de alta velocidad y baja latencia. Proporciona cachés gestionadas para mejorar el rendimiento de las aplicaciones mediante el almacenamiento en caché de datos en memoria.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una arquitectura sin servidor altamente escalable y completamente gestionada?",
    options: [
      { position: 1, option: "Amazon EC2" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon RDS" },
      { position: 4, option: "Amazon S3" },
    ],
    answer: { position: 2, option: "AWS Lambda" },
    justification:
      "AWS Lambda es el servicio de AWS que permite ejecutar código sin necesidad de aprovisionar ni administrar servidores. Es ideal para implementar arquitecturas sin servidor altamente escalables y completamente gestionadas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable con acceso instantáneo?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon EBS" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon DynamoDB" },
    ],
    answer: { position: 1, option: "Amazon S3" },
    justification:
      "Amazon S3 es el servicio de AWS utilizado para implementar un sistema de almacenamiento de datos altamente duradero y escalable con acceso instantáneo. Es ideal para almacenar una amplia variedad de datos, desde objetos estáticos hasta datos de aplicaciones.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una base de datos relacional completamente administrada y altamente escalable?",
    options: [
      { position: 1, option: "Amazon RDS" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Redshift" },
      { position: 4, option: "Amazon Aurora" },
    ],
    answer: { position: 1, option: "Amazon RDS" },
    justification:
      "Amazon RDS es el servicio de AWS utilizado para implementar una base de datos relacional completamente administrada y altamente escalable. Es ideal para aplicaciones que requieren una base de datos relacional tradicional con alta disponibilidad y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de streaming en tiempo real?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon SQS" },
      { position: 3, option: "AWS Glue" },
      { position: 4, option: "AWS Data Pipeline" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es el servicio de AWS utilizado para implementar un sistema de procesamiento de streaming en tiempo real. Es ideal para recopilar, procesar y analizar datos de streaming a gran escala, como datos de clickstream, logs y eventos de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de mensajería pub/sub (publicación/suscripción) para aplicaciones distribuidas?",
    options: [
      { position: 1, option: "Amazon SNS" },
      { position: 2, option: "Amazon SQS" },
      { position: 3, option: "AWS IoT Core" },
      { position: 4, option: "Amazon MQ" },
    ],
    answer: { position: 1, option: "Amazon SNS" },
    justification:
      "Amazon SNS es el servicio de AWS utilizado para implementar un sistema de mensajería pub/sub para aplicaciones distribuidas. Permite enviar mensajes a varios puntos de enlace, como correos electrónicos, SMS, HTTP endpoints y colas de SQS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de monitoreo y administración de recursos de AWS?",
    options: [
      { position: 1, option: "Amazon CloudWatch" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "Amazon Inspector" },
      { position: 4, option: "AWS Trusted Advisor" },
    ],
    answer: { position: 1, option: "Amazon CloudWatch" },
    justification:
      "Amazon CloudWatch es el servicio de AWS utilizado para implementar un sistema de monitoreo y administración de recursos de AWS. Permite supervisar el rendimiento de las aplicaciones, recopilar métricas operativas y generar alarmas basadas en umbrales personalizados.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar una red privada virtual (VPN) para conectar la infraestructura local con los recursos de AWS?",
    options: [
      { position: 1, option: "AWS Direct Connect" },
      { position: 2, option: "Amazon VPC" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "Amazon CloudFront" },
    ],
    answer: { position: 1, option: "AWS Direct Connect" },
    justification:
      "AWS Direct Connect es el servicio de AWS utilizado para implementar una conexión de red privada entre la infraestructura local y los recursos de AWS. Proporciona un enlace dedicado de alta velocidad para acceder a los servicios de AWS de forma segura y confiable.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de identidad y acceso en la nube?",
    options: [
      { position: 1, option: "Amazon Cognito" },
      { position: 2, option: "AWS IAM" },
      { position: 3, option: "AWS Directory Service" },
      { position: 4, option: "Amazon GuardDuty" },
    ],
    answer: { position: 2, option: "AWS IAM" },
    justification:
      "AWS IAM (Identity and Access Management) es el servicio de AWS utilizado para implementar un sistema de administración de identidad y acceso en la nube. Permite controlar el acceso a los recursos de AWS mediante la creación y gestión de usuarios, grupos y roles.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos en memoria de alta velocidad y baja latencia?",
    options: [
      { position: 1, option: "Amazon ElastiCache" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Aurora" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon ElastiCache" },
    justification:
      "Amazon ElastiCache es el servicio de AWS utilizado para implementar un sistema de almacenamiento de datos en memoria de alta velocidad y baja latencia. Proporciona cachés gestionadas para mejorar el rendimiento de las aplicaciones mediante el almacenamiento en caché de datos en memoria.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de big data escalable y rentable?",
    options: [
      { position: 1, option: "Amazon EMR" },
      { position: 2, option: "Amazon Athena" },
      { position: 3, option: "Amazon QuickSight" },
      { position: 4, option: "AWS Glue" },
    ],
    answer: { position: 1, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es el servicio de AWS utilizado para implementar un sistema de análisis de big data escalable y rentable. Permite procesar grandes volúmenes de datos utilizando marcos de código abierto como Hadoop, Spark y Presto en un entorno gestionado.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de reconocimiento facial basado en inteligencia artificial?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Lex" },
      { position: 3, option: "Amazon Polly" },
      { position: 4, option: "Amazon Comprehend" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es el servicio de AWS utilizado para implementar un sistema de reconocimiento facial basado en inteligencia artificial. Permite analizar imágenes y videos para identificar rostros, objetos y contenido inapropiado de forma rápida y precisa.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de archivos escalable y seguro en la nube?",
    options: [
      { position: 1, option: "Amazon EFS" },
      { position: 2, option: "Amazon FSx" },
      { position: 3, option: "Amazon S3" },
      { position: 4, option: "AWS Storage Gateway" },
    ],
    answer: { position: 1, option: "Amazon EFS" },
    justification:
      "Amazon EFS (Elastic File System) es el servicio de AWS utilizado para implementar un sistema de almacenamiento de archivos escalable y seguro en la nube. Proporciona un sistema de archivos compartido que puede ser montado en múltiples instancias EC2 y contenedores Docker.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de registro centralizado y análisis de registros para aplicaciones distribuidas?",
    options: [
      { position: 1, option: "Amazon CloudWatch Logs" },
      { position: 2, option: "Amazon Elasticsearch Service" },
      { position: 3, option: "Amazon Kinesis" },
      { position: 4, option: "Amazon S3" },
    ],
    answer: { position: 1, option: "Amazon CloudWatch Logs" },
    justification:
      "Amazon CloudWatch Logs es el servicio de AWS utilizado para implementar un sistema de registro centralizado y análisis de registros para aplicaciones distribuidas. Permite recopilar, almacenar y analizar logs de aplicaciones y sistemas en tiempo real.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de gestión de flotas de dispositivos IoT (Internet of Things)?",
    options: [
      { position: 1, option: "AWS IoT Core" },
      { position: 2, option: "AWS IoT Device Management" },
      { position: 3, option: "Amazon FreeRTOS" },
      { position: 4, option: "Amazon IoT Analytics" },
    ],
    answer: { position: 2, option: "AWS IoT Device Management" },
    justification:
      "AWS IoT Device Management es el servicio de AWS utilizado para implementar un sistema de gestión de flotas de dispositivos IoT. Permite registrar, organizar y monitorear dispositivos IoT a escala, así como realizar actualizaciones de firmware y configuraciones remotas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de seguridad y detección de amenazas en la nube?",
    options: [
      { position: 1, option: "Amazon GuardDuty" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "AWS WAF" },
      { position: 4, option: "Amazon Inspector" },
    ],
    answer: { position: 1, option: "Amazon GuardDuty" },
    justification:
      "Amazon GuardDuty es el servicio de AWS utilizado para implementar un sistema de análisis de seguridad y detección de amenazas en la nube. Utiliza machine learning y análisis de comportamiento para identificar actividades sospechosas y proteger los recursos de AWS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de búsqueda y análisis de texto en grandes volúmenes de datos no estructurados?",
    options: [
      { position: 1, option: "Amazon Elasticsearch Service" },
      { position: 2, option: "Amazon CloudSearch" },
      { position: 3, option: "Amazon Redshift" },
      { position: 4, option: "Amazon Athena" },
    ],
    answer: { position: 1, option: "Amazon Elasticsearch Service" },
    justification:
      "Amazon Elasticsearch Service es el servicio de AWS utilizado para implementar un sistema de búsqueda y análisis de texto en grandes volúmenes de datos no estructurados. Permite indexar y analizar datos en tiempo real para obtener información valiosa y generar visualizaciones.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT?",
    options: [
      { position: 1, option: "AWS IoT Events" },
      { position: 2, option: "Amazon Kinesis" },
      { position: 3, option: "Amazon EventBridge" },
      { position: 4, option: "Amazon Simple Queue Service (SQS)" },
    ],
    answer: { position: 1, option: "AWS IoT Events" },
    justification:
      "AWS IoT Events es el servicio de AWS utilizado para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT. Permite detectar y responder automáticamente a eventos generados por dispositivos IoT, como cambios de estado y anomalías.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de flotas de vehículos en tiempo real?",
    options: [
      { position: 1, option: "Amazon Location Service" },
      { position: 2, option: "Amazon Pinpoint" },
      { position: 3, option: "AWS IoT Fleet Hub" },
      { position: 4, option: "AWS IoT Greengrass" },
    ],
    answer: { position: 3, option: "AWS IoT Fleet Hub" },
    justification:
      "AWS IoT Fleet Hub es el servicio de AWS utilizado para implementar un sistema de administración de flotas de vehículos en tiempo real. Permite visualizar y monitorear el estado y la ubicación de los vehículos, así como enviar comandos y actualizaciones remotas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de vídeo en tiempo real con reconocimiento de objetos?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Textract" },
      { position: 4, option: "Amazon Transcribe" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es el servicio de AWS utilizado para implementar un sistema de análisis de vídeo en tiempo real con reconocimiento de objetos. Permite identificar y analizar objetos, rostros y contenido visual en vídeos de forma automática y precisa.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de traducción de texto y voz automático?",
    options: [
      { position: 1, option: "Amazon Translate" },
      { position: 2, option: "Amazon Transcribe" },
      { position: 3, option: "Amazon Polly" },
      { position: 4, option: "Amazon Kendra" },
    ],
    answer: { position: 1, option: "Amazon Translate" },
    justification:
      "Amazon Translate es el servicio de AWS utilizado para implementar un sistema de traducción de texto y voz automático. Permite traducir texto y audio entre diferentes idiomas de forma rápida y precisa utilizando modelos de aprendizaje automático.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de planificación y coordinación de eventos en tiempo real?",
    options: [
      { position: 1, option: "Amazon Pinpoint" },
      { position: 2, option: "Amazon EventBridge" },
      { position: 3, option: "Amazon Location Service" },
      { position: 4, option: "Amazon SES" },
    ],
    answer: { position: 2, option: "Amazon EventBridge" },
    justification:
      "Amazon EventBridge es el servicio de AWS utilizado para implementar un sistema de planificación y coordinación de eventos en tiempo real. Permite enviar y recibir eventos entre aplicaciones de forma segura y confiable, facilitando la integración y la automatización de procesos.",
  },
  {
    question:
      "¿Cuál es el límite máximo de almacenamiento para un solo objeto en Amazon S3?",
    options: [
      { position: 1, option: "5 GB" },
      { position: 2, option: "50 GB" },
      { position: 3, option: "500 GB" },
      { position: 4, option: "5 TB" },
    ],
    answer: { position: 4, option: "5 TB" },
    justification:
      "El límite máximo de almacenamiento para un solo objeto en Amazon S3 es de 5 TB. Esto permite almacenar objetos de gran tamaño, como conjuntos de datos, archivos multimedia de alta definición y copias de seguridad completas de bases de datos.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe mejor la diferencia entre Amazon EC2 y Amazon ECS?",
    options: [
      {
        position: 1,
        option:
          "Amazon EC2 es un servicio de cómputo en la nube que proporciona capacidad informática escalable mediante la creación y gestión de instancias virtuales, mientras que Amazon ECS es un servicio de contenedores que permite ejecutar aplicaciones en contenedores Docker en un entorno gestionado.",
      },
      {
        position: 2,
        option:
          "Amazon EC2 es un servicio de almacenamiento en la nube que proporciona un sistema de archivos escalable y duradero para almacenar datos, mientras que Amazon ECS es un servicio de bases de datos que permite almacenar y recuperar datos estructurados en la nube.",
      },
      {
        position: 3,
        option:
          "Amazon EC2 es un servicio de redes en la nube que proporciona capacidades de enrutamiento y equilibrio de carga para distribuir el tráfico entre diferentes instancias, mientras que Amazon ECS es un servicio de seguridad que protege los recursos de AWS mediante el monitoreo continuo y la detección de amenazas.",
      },
      {
        position: 4,
        option:
          "Amazon EC2 es un servicio de administración en la nube que proporciona herramientas para gestionar y automatizar recursos de AWS, mientras que Amazon ECS es un servicio de desarrollo que facilita la creación y entrega de aplicaciones en la nube.",
      },
    ],
    answer: {
      position: 1,
      option:
        "Amazon EC2 es un servicio de cómputo en la nube que proporciona capacidad informática escalable mediante la creación y gestión de instancias virtuales, mientras que Amazon ECS es un servicio de contenedores que permite ejecutar aplicaciones en contenedores Docker en un entorno gestionado.",
    },
    justification:
      "Amazon EC2 (Elastic Compute Cloud) es un servicio que ofrece capacidad de cómputo escalable en la nube, mientras que Amazon ECS (Elastic Container Service) es un servicio de orquestación de contenedores que permite ejecutar y administrar aplicaciones en contenedores Docker de manera eficiente.",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe mejor el propósito de Amazon RDS?",
    options: [
      {
        position: 1,
        option:
          "Amazon RDS es un servicio de almacenamiento en la nube que proporciona un sistema de archivos escalable y duradero para almacenar datos, mientras que Amazon RDS es un servicio de bases de datos que permite almacenar y recuperar datos estructurados en la nube.",
      },
      {
        position: 2,
        option:
          "Amazon RDS es un servicio de seguridad que protege los recursos de AWS mediante el monitoreo continuo y la detección de amenazas, mientras que Amazon RDS es un servicio de redes en la nube que proporciona capacidades de enrutamiento y equilibrio de carga para distribuir el tráfico entre diferentes instancias.",
      },
      {
        position: 3,
        option:
          "Amazon RDS es un servicio de cómputo en la nube que proporciona capacidad informática escalable mediante la creación y gestión de instancias virtuales, mientras que Amazon RDS es un servicio de contenedores que permite ejecutar aplicaciones en contenedores Docker en un entorno gestionado.",
      },
      {
        position: 4,
        option:
          "Amazon RDS es un servicio de bases de datos relacional completamente administrado que facilita la configuración, operación y escalabilidad de bases de datos relacionales en la nube.",
      },
    ],
    answer: {
      position: 4,
      option:
        "Amazon RDS es un servicio de bases de datos relacional completamente administrado que facilita la configuración, operación y escalabilidad de bases de datos relacionales en la nube.",
    },
    justification:
      "Amazon RDS (Relational Database Service) es un servicio de AWS que facilita la configuración, operación y escalabilidad de bases de datos relacionales en la nube. Ofrece opciones para bases de datos MySQL, PostgreSQL, Oracle, SQL Server y MariaDB, gestionando tareas como el aprovisionamiento de hardware, la configuración de software, las copias de seguridad, las actualizaciones de software y la escalabilidad.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "AWS IoT Events" },
      { position: 3, option: "Amazon SQS" },
      { position: 4, option: "Amazon SNS" },
    ],
    answer: { position: 2, option: "AWS IoT Events" },
    justification:
      "AWS IoT Events es un servicio de AWS que permite detectar y responder automáticamente a eventos generados por dispositivos IoT en tiempo real. Proporciona una manera fácil de detectar patrones de eventos y tomar acciones basadas en reglas personalizadas, lo que facilita la automatización de procesos en aplicaciones de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de big data en tiempo real?",
    options: [
      { position: 1, option: "Amazon Redshift" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon QuickSight" },
    ],
    answer: { position: 2, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es un servicio de AWS que permite procesar grandes volúmenes de datos utilizando frameworks de código abierto como Hadoop, Spark y Presto en tiempo real. Facilita la implementación y administración de clústeres de big data, lo que permite realizar análisis avanzados y obtener información valiosa de los datos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de reconocimiento de voz en tiempo real?",
    options: [
      { position: 1, option: "Amazon Transcribe" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Translate" },
      { position: 4, option: "Amazon Comprehend" },
    ],
    answer: { position: 1, option: "Amazon Transcribe" },
    justification:
      "Amazon Transcribe es un servicio de AWS que permite convertir audio en texto en tiempo real utilizando tecnología de reconocimiento de voz. Es útil para transcribir grabaciones de llamadas, reuniones, conferencias y otros eventos de audio, lo que facilita el análisis y la búsqueda de contenido.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones móviles?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de juego, en aplicaciones móviles que requieren acceso rápido y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de imágenes en tiempo real para aplicaciones de visión por computadora?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Comprehend" },
      { position: 3, option: "Amazon Textract" },
      { position: 4, option: "Amazon SageMaker" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de visión por computadora. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de entrega de contenido en la nube con baja latencia y alta disponibilidad?",
    options: [
      { position: 1, option: "Amazon CloudFront" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "AWS Direct Connect" },
    ],
    answer: { position: 1, option: "Amazon CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de AWS que proporciona una red de entrega de contenido global para distribuir contenido web, streaming de vídeo y aplicaciones a usuarios finales con baja latencia y alta disponibilidad. Utiliza una red de ubicaciones de borde distribuidas estratégicamente para mejorar el rendimiento y reducir la carga en los servidores de origen.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de orquestación de contenedores altamente escalable?",
    options: [
      { position: 1, option: "Amazon ECS" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon EKS" },
      { position: 4, option: "AWS Batch" },
    ],
    answer: { position: 3, option: "Amazon EKS" },
    justification:
      "Amazon EKS (Elastic Kubernetes Service) es un servicio de AWS que permite ejecutar contenedores Docker en un entorno Kubernetes administrado. Proporciona escalabilidad, disponibilidad y seguridad para aplicaciones basadas en contenedores, facilitando la implementación y gestión de cargas de trabajo contenerizadas a gran escala.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de flujo de datos en tiempo real para aplicaciones analíticas?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es un servicio de AWS que permite recopilar, procesar y analizar datos en tiempo real a gran escala. Es ideal para aplicaciones analíticas, transmisión de datos en tiempo real, procesamiento de registros, detección de anomalías y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de traducción de texto automático a múltiples idiomas?",
    options: [
      { position: 1, option: "Amazon Translate" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Transcribe" },
      { position: 4, option: "Amazon Comprehend" },
    ],
    answer: { position: 1, option: "Amazon Translate" },
    justification:
      "Amazon Translate es un servicio de AWS que proporciona traducción automática de texto a múltiples idiomas con alta precisión y velocidad. Es útil para aplicaciones internacionales, sitios web multilingües, soporte al cliente global y más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de flotas de vehículos conectados?",
    options: [
      { position: 1, option: "AWS IoT Core" },
      { position: 2, option: "Amazon Location Service" },
      { position: 3, option: "AWS IoT Fleet Hub" },
      { position: 4, option: "Amazon Timestream" },
    ],
    answer: { position: 3, option: "AWS IoT Fleet Hub" },
    justification:
      "AWS IoT Fleet Hub es un servicio de AWS que permite administrar flotas de vehículos conectados de manera eficiente y segura. Proporciona herramientas para monitorear el estado, la ubicación y el rendimiento de los vehículos, así como para enviar comandos y actualizaciones remotas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de logs en tiempo real?",
    options: [
      { position: 1, option: "Amazon CloudWatch Logs" },
      { position: 2, option: "Amazon Kinesis Data Firehose" },
      { position: 3, option: "Amazon Elasticsearch Service" },
      { position: 4, option: "AWS Glue" },
    ],
    answer: { position: 1, option: "Amazon CloudWatch Logs" },
    justification:
      "Amazon CloudWatch Logs es un servicio de AWS que permite recopilar, almacenar y analizar logs de aplicaciones y sistemas en tiempo real. Facilita la detección y resolución de problemas, la monitorización del rendimiento y la generación de informes de auditoría para aplicaciones distribuidas.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de sentimientos en texto y redes sociales?",
    options: [
      { position: 1, option: "Amazon Comprehend" },
      { position: 2, option: "Amazon Lex" },
      { position: 3, option: "Amazon Polly" },
      { position: 4, option: "Amazon Rekognition" },
    ],
    answer: { position: 1, option: "Amazon Comprehend" },
    justification:
      "Amazon Comprehend es un servicio de AWS que utiliza técnicas de procesamiento de lenguaje natural para analizar texto y extraer información relevante, como sentimientos, temas, entidades y relaciones. Es útil para aplicaciones de análisis de opiniones, inteligencia empresarial, detección de fraudes y más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de identidades y accesos en la nube?",
    options: [
      { position: 1, option: "AWS IAM" },
      { position: 2, option: "Amazon Cognito" },
      { position: 3, option: "AWS Directory Service" },
      { position: 4, option: "AWS Single Sign-On" },
    ],
    answer: { position: 1, option: "AWS IAM" },
    justification:
      "AWS IAM (Identity and Access Management) es un servicio de AWS que permite gestionar de forma segura el acceso a los recursos de AWS. Permite crear y gestionar usuarios, grupos y roles, así como definir políticas de acceso granular para controlar quién puede acceder a qué recursos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de flotas de dispositivos IoT?",
    options: [
      { position: 1, option: "AWS IoT Core" },
      { position: 2, option: "AWS IoT Device Management" },
      { position: 3, option: "Amazon FreeRTOS" },
      { position: 4, option: "Amazon IoT Analytics" },
    ],
    answer: { position: 2, option: "AWS IoT Device Management" },
    justification:
      "AWS IoT Device Management es un servicio de AWS que permite registrar, organizar y monitorear dispositivos IoT a escala. Facilita la gestión del ciclo de vida de los dispositivos, incluida la configuración, el monitoreo, las actualizaciones de firmware y las acciones remotas, lo que permite mantener los dispositivos seguros y actualizados.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de seguridad y detección de amenazas en la nube?",
    options: [
      { position: 1, option: "Amazon GuardDuty" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "AWS Security Hub" },
      { position: 4, option: "Amazon Macie" },
    ],
    answer: { position: 1, option: "Amazon GuardDuty" },
    justification:
      "Amazon GuardDuty es un servicio de AWS que utiliza machine learning y análisis de comportamiento para detectar actividades sospechosas y proteger los recursos de AWS contra amenazas de seguridad. Analiza continuamente los logs de la cuenta de AWS para identificar comportamientos maliciosos, como intentos de acceso no autorizado, comunicaciones anómalas y configuraciones de seguridad deficientes.",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre una instancia reservada de Amazon EC2 y una instancia spot?",
    options: [
      {
        position: 1,
        option:
          "Las instancias reservadas garantizan capacidad de servidor dedicada, mientras que las instancias spot aprovechan la capacidad no utilizada con precios variables.",
      },
      {
        position: 2,
        option:
          "Las instancias reservadas permiten establecer límites de tiempo de ejecución, mientras que las instancias spot pueden ejecutarse de forma indefinida.",
      },
      {
        position: 3,
        option:
          "Las instancias reservadas se escalan automáticamente según la demanda, mientras que las instancias spot requieren intervención manual para ajustar la capacidad.",
      },
      {
        position: 4,
        option:
          "Las instancias reservadas ofrecen descuentos significativos a cambio de compromisos a largo plazo, mientras que las instancias spot tienen precios fijos y no requieren compromisos.",
      },
    ],
    answer: {
      position: 1,
      option:
        "Las instancias reservadas garantizan capacidad de servidor dedicada, mientras que las instancias spot aprovechan la capacidad no utilizada con precios variables.",
    },
    justification:
      "Las instancias reservadas de Amazon EC2 permiten a los usuarios reservar capacidad de servidor dedicada por un período de uno o tres años, lo que proporciona descuentos significativos en comparación con las instancias bajo demanda. Por otro lado, las instancias spot son instancias disponibles a precios variables basados en la oferta y demanda del mercado de EC2, permitiendo a los usuarios aprovechar la capacidad no utilizada a costos reducidos.",
  },
  {
    question:
      "¿Cuál de las siguientes características de Amazon EC2 permite distribuir el tráfico de red de forma equitativa entre varias instancias?",
    options: [
      { position: 1, option: "Auto Scaling" },
      { position: 2, option: "Elastic Load Balancing" },
      { position: 3, option: "Amazon VPC" },
      { position: 4, option: "Amazon Route 53" },
    ],
    answer: { position: 2, option: "Elastic Load Balancing" },
    justification:
      "Elastic Load Balancing (ELB) es un servicio de balanceo de carga automatizado de Amazon EC2 que distribuye automáticamente el tráfico de red entrante de manera equitativa entre múltiples instancias EC2 dentro de una o más regiones de AWS. Esto mejora la disponibilidad y la tolerancia a fallos de las aplicaciones al distribuir la carga de manera uniforme y redirigir el tráfico de forma automática en caso de fallo de una instancia.",
  },
  {
    question:
      "¿Qué tipo de planes de soporte ofrece AWS para sus clientes empresariales?",
    options: [
      {
        position: 1,
        option:
          "Basic Support, Developer Support, Business Support y Enterprise Support",
      },
      {
        position: 2,
        option:
          "Starter Support, Advanced Support, Professional Support y Elite Support",
      },
      {
        position: 3,
        option:
          "Bronze Support, Silver Support, Gold Support y Platinum Support",
      },
      {
        position: 4,
        option:
          "Standard Support, Premium Support, Enterprise Support y VIP Support",
      },
    ],
    answer: {
      position: 4,
      option:
        "Standard Support, Premium Support, Enterprise Support y VIP Support",
    },
    justification:
      "AWS ofrece varios planes de soporte diseñados para satisfacer las necesidades de diferentes tipos de clientes. Estos planes incluyen Standard Support, Premium Support, Enterprise Support y VIP Support, cada uno con características y niveles de servicio específicos, como acceso a ingenieros de soporte las 24 horas del día, 7 días a la semana, tiempo de respuesta garantizado, y más.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el modelo de responsabilidad compartida en AWS?",
    options: [
      {
        position: 1,
        option:
          "AWS es responsable de todas las capas de seguridad, desde la infraestructura física hasta las aplicaciones de usuario final.",
      },
      {
        position: 2,
        option:
          "Los clientes son responsables de garantizar la seguridad de los datos y las aplicaciones, mientras que AWS se encarga de la seguridad de la infraestructura de la nube.",
      },
      {
        position: 3,
        option:
          "AWS y los clientes comparten la responsabilidad de proteger los datos y las aplicaciones en la nube, cada uno siendo responsable de diferentes aspectos de la seguridad.",
      },
      {
        position: 4,
        option:
          "Los clientes son responsables de gestionar la escalabilidad y el rendimiento de sus aplicaciones en la nube, mientras que AWS se encarga de la seguridad y el cumplimiento normativo.",
      },
    ],
    answer: {
      position: 3,
      option:
        "AWS y los clientes comparten la responsabilidad de proteger los datos y las aplicaciones en la nube, cada uno siendo responsable de diferentes aspectos de la seguridad.",
    },
    justification:
      "El modelo de responsabilidad compartida en AWS establece que AWS es responsable de la seguridad de la nube, lo que incluye la seguridad de la infraestructura global, mientras que los clientes son responsables de la seguridad en la nube, lo que incluye la protección de los datos, las aplicaciones, las identidades y el acceso a los servicios de AWS.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor una ventaja clave de usar Amazon VPC?",
    options: [
      {
        position: 1,
        option:
          "Amazon VPC ofrece un acceso seguro y privado a los servicios de AWS desde una red corporativa utilizando conexiones VPN o conexiones directas.",
      },
      {
        position: 2,
        option:
          "Amazon VPC permite a los usuarios almacenar y recuperar grandes volúmenes de datos de forma segura y escalable utilizando almacenamiento de objetos en la nube.",
      },
      {
        position: 3,
        option:
          "Amazon VPC proporciona una infraestructura global para distribuir contenido web y aplicaciones a usuarios finales con baja latencia y alta disponibilidad.",
      },
      {
        position: 4,
        option:
          "Amazon VPC facilita la implementación y gestión de contenedores Docker en la nube utilizando un entorno de ejecución gestionado y escalable.",
      },
    ],
    answer: {
      position: 1,
      option:
        "Amazon VPC ofrece un acceso seguro y privado a los servicios de AWS desde una red corporativa utilizando conexiones VPN o conexiones directas.",
    },
    justification:
      "Amazon VPC (Virtual Private Cloud) es un servicio de redes de AWS que permite a los usuarios crear una red virtual aislada en la nube de AWS, lo que les permite definir su propio espacio de red virtual, incluida la selección de rangos de direcciones IP, la creación de subredes y la configuración de tablas de rutas y puertas de enlace. Esto proporciona un acceso seguro y privado a los servicios de AWS desde una red corporativa utilizando conexiones VPN o conexiones directas.",
  },
  {
    question:
      "¿Qué tipo de instancias de Amazon EC2 son más adecuadas para aplicaciones que requieren una alta capacidad de cómputo, como análisis de datos, modelado financiero y simulación científica?",
    options: [
      { position: 1, option: "Instancias de la familia T" },
      { position: 2, option: "Instancias de la familia C" },
      { position: 3, option: "Instancias de la familia M" },
      { position: 4, option: "Instancias de la familia P" },
    ],
    answer: { position: 4, option: "Instancias de la familia P" },
    justification:
      "Las instancias de la familia P de Amazon EC2 están optimizadas para aplicaciones que requieren una alta capacidad de cómputo, como análisis de datos, modelado financiero y simulación científica. Estas instancias utilizan procesadores de alto rendimiento y están equipadas con GPU para acelerar cargas de trabajo intensivas en cómputo.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de objetos altamente escalable y duradero?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon EBS" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 1, option: "Amazon S3" },
    justification:
      "Amazon S3 (Simple Storage Service) es un servicio de almacenamiento de objetos altamente escalable y duradero que permite a los usuarios almacenar y recuperar grandes volúmenes de datos de forma segura y eficiente. Es ideal para una amplia variedad de casos de uso, incluido el almacenamiento de datos, la copia de seguridad de archivos, la distribución de contenido estático y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de copia de seguridad y recuperación de datos automatizado?",
    options: [
      { position: 1, option: "Amazon S3 Glacier" },
      { position: 2, option: "Amazon RDS" },
      { position: 3, option: "Amazon EFS" },
      { position: 4, option: "AWS Backup" },
    ],
    answer: { position: 4, option: "AWS Backup" },
    justification:
      "AWS Backup es un servicio de AWS que permite a los usuarios gestionar de forma centralizada la copia de seguridad y recuperación de datos en la nube. Proporciona una solución de copia de seguridad automatizada y rentable para proteger los datos de las aplicaciones y los servicios de AWS, incluidos Amazon EBS, Amazon RDS, Amazon DynamoDB, Amazon EFS y almacenamiento de objetos en Amazon S3.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de administración de identidades y accesos federados?",
    options: [
      { position: 1, option: "AWS IAM" },
      { position: 2, option: "Amazon Cognito" },
      { position: 3, option: "AWS Directory Service" },
      { position: 4, option: "AWS Single Sign-On" },
    ],
    answer: { position: 2, option: "Amazon Cognito" },
    justification:
      "Amazon Cognito es un servicio de AWS que permite a los desarrolladores agregar fácilmente funciones de autenticación, autorización y gestión de usuarios a sus aplicaciones web y móviles. Facilita la creación de experiencias de inicio de sesión seguras y sin problemas utilizando identidades de redes sociales, proveedores de identidad empresarial o sistemas de identidad federada.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "AWS IoT Events" },
      { position: 3, option: "Amazon SQS" },
      { position: 4, option: "Amazon SNS" },
    ],
    answer: { position: 2, option: "AWS IoT Events" },
    justification:
      "AWS IoT Events es un servicio de AWS que permite detectar y responder automáticamente a eventos generados por dispositivos IoT en tiempo real. Proporciona una manera fácil de detectar patrones de eventos y tomar acciones basadas en reglas personalizadas, lo que facilita la automatización de procesos en aplicaciones de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de big data en tiempo real?",
    options: [
      { position: 1, option: "Amazon Redshift" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon QuickSight" },
    ],
    answer: { position: 2, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es un servicio de AWS que permite procesar grandes volúmenes de datos utilizando frameworks de código abierto como Hadoop, Spark y Presto en tiempo real. Facilita la implementación y administración de clústeres de big data, lo que permite realizar análisis avanzados y obtener información valiosa de los datos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de reconocimiento de voz en tiempo real?",
    options: [
      { position: 1, option: "Amazon Transcribe" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Translate" },
      { position: 4, option: "Amazon Comprehend" },
    ],
    answer: { position: 1, option: "Amazon Transcribe" },
    justification:
      "Amazon Transcribe es un servicio de AWS que permite convertir audio en texto en tiempo real utilizando tecnología de reconocimiento de voz. Es útil para transcribir grabaciones de llamadas, reuniones, conferencias y otros eventos de audio, lo que facilita el análisis y la búsqueda de contenido.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones móviles?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de juego, en aplicaciones móviles que requieren acceso rápido y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de imágenes en tiempo real para aplicaciones de visión por computadora?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Comprehend" },
      { position: 3, option: "Amazon Textract" },
      { position: 4, option: "Amazon SageMaker" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de visión por computadora. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de entrega de contenido en la nube con baja latencia y alta disponibilidad?",
    options: [
      { position: 1, option: "Amazon CloudFront" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "AWS Direct Connect" },
    ],
    answer: { position: 1, option: "Amazon CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de AWS que proporciona una red de entrega de contenido global para distribuir contenido web, streaming de vídeo y aplicaciones a usuarios finales con baja latencia y alta disponibilidad. Utiliza una red de ubicaciones de borde distribuidas estratégicamente para mejorar el rendimiento y reducir la carga en los servidores de origen.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de orquestación de contenedores altamente escalable?",
    options: [
      { position: 1, option: "Amazon ECS" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon EKS" },
      { position: 4, option: "AWS Batch" },
    ],
    answer: { position: 3, option: "Amazon EKS" },
    justification:
      "Amazon EKS (Elastic Kubernetes Service) es un servicio de AWS que permite ejecutar contenedores Docker en un entorno Kubernetes administrado. Proporciona escalabilidad, disponibilidad y seguridad para aplicaciones basadas en contenedores, facilitando la implementación y gestión de cargas de trabajo contenerizadas a gran escala.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de flujo de datos en tiempo real para aplicaciones analíticas?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es un servicio de AWS que permite recopilar, procesar y analizar datos en tiempo real a gran escala. Es ideal para aplicaciones analíticas, como análisis de clics, detección de fraudes, monitorización de flujos de log y mucho más, que requieren procesamiento de datos en tiempo real con baja latencia.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor AWS Artifact?",
    options: [
      {
        position: 1,
        option:
          "AWS Artifact es un servicio que proporciona artefactos físicos para implementar la infraestructura de AWS en entornos locales.",
      },
      {
        position: 2,
        option:
          "AWS Artifact es un servicio que proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS.",
      },
      {
        position: 3,
        option:
          "AWS Artifact es un servicio que ofrece herramientas de colaboración para equipos de desarrollo que trabajan en proyectos de AWS.",
      },
      {
        position: 4,
        option:
          "AWS Artifact es un servicio que ofrece herramientas de análisis de datos para identificar patrones de uso de recursos en AWS.",
      },
    ],
    answer: {
      position: 2,
      option:
        "AWS Artifact es un servicio que proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS.",
    },
    justification:
      "AWS Artifact es un servicio que proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS. Los usuarios pueden acceder a informes de auditoría, certificaciones de cumplimiento y acuerdos de seguridad y confidencialidad para cumplir con los requisitos de auditoría y cumplimiento.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor AWS Organizations?",
    options: [
      {
        position: 1,
        option:
          "AWS Organizations es un servicio que permite a los usuarios organizar y gestionar sus recursos de AWS en un único grupo de trabajo.",
      },
      {
        position: 2,
        option:
          "AWS Organizations es un servicio que proporciona herramientas para el análisis y la visualización de datos en AWS.",
      },
      {
        position: 3,
        option:
          "AWS Organizations es un servicio que permite a los usuarios federar identidades de múltiples proveedores de identidad en AWS.",
      },
      {
        position: 4,
        option:
          "AWS Organizations es un servicio que ofrece funcionalidades de control de acceso y gestión de cuentas de usuario en AWS.",
      },
    ],
    answer: {
      position: 4,
      option:
        "AWS Organizations es un servicio que ofrece funcionalidades de control de acceso y gestión de cuentas de usuario en AWS.",
    },
    justification:
      "AWS Organizations es un servicio que ofrece funcionalidades de control de acceso y gestión de cuentas de usuario en AWS. Permite a los usuarios crear una jerarquía de cuentas para organizar y administrar sus recursos de AWS de manera centralizada, establecer políticas de seguridad y acceso, y automatizar la implementación y gestión de recursos en toda la organización.",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de ataques de denegación de servicio (DDoS) tiene como objetivo agotar los recursos del sistema objetivo consumiendo ancho de banda de red?",
    options: [
      {
        position: 1,
        option: "Ataque de denegación de servicio distribuido (DDoS)",
      },
      {
        position: 2,
        option: "Ataque de denegación de servicio de inundación SYN",
      },
      {
        position: 3,
        option: "Ataque de denegación de servicio amplificado (DNS)",
      },
      {
        position: 4,
        option: "Ataque de denegación de servicio de saturación de red (NTP)",
      },
    ],
    answer: {
      position: 4,
      option: "Ataque de denegación de servicio de saturación de red (NTP)",
    },
    justification:
      "Un ataque de denegación de servicio de saturación de red (NTP) tiene como objetivo agotar los recursos del sistema objetivo consumiendo ancho de banda de red. Esto se logra enviando una gran cantidad de paquetes de datos falsificados a través de la red, lo que hace que el sistema objetivo se sobrecargue y se vuelva inaccesible para los usuarios legítimos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona protección contra ataques de denegación de servicio (DDoS) en capas 3 y 4?",
    options: [
      { position: 1, option: "AWS Shield" },
      { position: 2, option: "AWS WAF" },
      { position: 3, option: "Amazon GuardDuty" },
      { position: 4, option: "AWS Firewall Manager" },
    ],
    answer: { position: 1, option: "AWS Shield" },
    justification:
      "AWS Shield es un servicio de AWS que proporciona protección contra ataques de denegación de servicio (DDoS) en capas 3 y 4 de la red. Ofrece protección automática y escalable contra los ataques DDoS más comunes, ayudando a mantener la disponibilidad de las aplicaciones y los servicios de AWS.",
  },
  {
    question:
      "¿Cuál de los siguientes planes de soporte de AWS proporciona acceso a ingenieros de soporte las 24 horas del día, los 7 días de la semana, tiempos de respuesta de menos de 15 minutos para eventos críticos y sesiones de revisión de arquitectura?",
    options: [
      { position: 1, option: "Basic Support" },
      { position: 2, option: "Developer Support" },
      { position: 3, option: "Business Support" },
      { position: 4, option: "Enterprise Support" },
    ],
    answer: { position: 4, option: "Enterprise Support" },
    justification:
      "El plan de soporte Enterprise Support proporciona acceso a ingenieros de soporte las 24 horas del día, los 7 días de la semana, tiempos de respuesta de menos de 15 minutos para eventos críticos y sesiones de revisión de arquitectura. Está diseñado para empresas que ejecutan cargas de trabajo críticas en AWS y requieren un alto nivel de soporte técnico y consultoría.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor una ventaja clave de utilizar AWS CloudFormation?",
    options: [
      {
        position: 1,
        option:
          "AWS CloudFormation permite a los usuarios analizar y visualizar el rendimiento de sus aplicaciones en tiempo real.",
      },
      {
        position: 2,
        option:
          "AWS CloudFormation proporciona una interfaz gráfica para diseñar y gestionar redes de VPC en AWS.",
      },
      {
        position: 3,
        option:
          "AWS CloudFormation permite a los usuarios automatizar la implementación y gestión de recursos de AWS utilizando código de infraestructura.",
      },
      {
        position: 4,
        option:
          "AWS CloudFormation proporciona herramientas de análisis de datos para identificar tendencias y patrones de uso de recursos en AWS.",
      },
    ],
    answer: {
      position: 3,
      option:
        "AWS CloudFormation permite a los usuarios automatizar la implementación y gestión de recursos de AWS utilizando código de infraestructura.",
    },
    justification:
      "AWS CloudFormation es un servicio que permite a los usuarios automatizar la implementación y gestión de recursos de AWS utilizando código de infraestructura. Esto proporciona una manera eficiente y segura de aprovisionar y actualizar recursos de forma consistente en entornos de desarrollo, prueba y producción.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones empresariales?",
    options: [
      { position: 1, option: "Amazon RDS" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon S3" },
      { position: 4, option: "Amazon EBS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de transacciones, en aplicaciones empresariales que requieren alta disponibilidad y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "AWS IoT Events" },
      { position: 3, option: "Amazon SQS" },
      { position: 4, option: "Amazon SNS" },
    ],
    answer: { position: 2, option: "AWS IoT Events" },
    justification:
      "AWS IoT Events es un servicio de AWS que permite detectar y responder automáticamente a eventos generados por dispositivos IoT en tiempo real. Proporciona una manera fácil de detectar patrones de eventos y tomar acciones basadas en reglas personalizadas, lo que facilita la automatización de procesos en aplicaciones de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de big data en tiempo real?",
    options: [
      { position: 1, option: "Amazon Redshift" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon QuickSight" },
    ],
    answer: { position: 2, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es un servicio de AWS que permite procesar grandes volúmenes de datos utilizando frameworks de código abierto como Hadoop, Spark y Presto en tiempo real. Facilita la implementación y administración de clústeres de big data, lo que permite realizar análisis avanzados y obtener información valiosa de los datos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de reconocimiento facial en tiempo real?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Translate" },
      { position: 4, option: "Amazon Transcribe" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de reconocimiento facial. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones móviles?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de juego, en aplicaciones móviles que requieren acceso rápido y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de imágenes en tiempo real para aplicaciones de visión por computadora?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Comprehend" },
      { position: 3, option: "Amazon Textract" },
      { position: 4, option: "Amazon SageMaker" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de visión por computadora. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de entrega de contenido en la nube con baja latencia y alta disponibilidad?",
    options: [
      { position: 1, option: "Amazon CloudFront" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "AWS Direct Connect" },
    ],
    answer: { position: 1, option: "Amazon CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de AWS que proporciona una red de entrega de contenido global para distribuir contenido web, streaming de vídeo y aplicaciones a usuarios finales con baja latencia y alta disponibilidad. Utiliza una red de ubicaciones de borde distribuidas estratégicamente para mejorar el rendimiento y reducir la carga en los servidores de origen.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de orquestación de contenedores altamente escalable?",
    options: [
      { position: 1, option: "Amazon ECS" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon EKS" },
      { position: 4, option: "AWS Batch" },
    ],
    answer: { position: 3, option: "Amazon EKS" },
    justification:
      "Amazon EKS (Elastic Kubernetes Service) es un servicio de AWS que permite ejecutar contenedores Docker en un entorno Kubernetes administrado. Proporciona escalabilidad, disponibilidad y seguridad para aplicaciones basadas en contenedores, facilitando la implementación y gestión de cargas de trabajo contenerizadas a gran escala.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de flujo de datos en tiempo real para aplicaciones analíticas?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es un servicio de AWS que permite recopilar, procesar y analizar datos en tiempo real a gran escala. Es ideal para aplicaciones analíticas, como análisis de clics, detección de fraudes, monitorización de flujos de log y mucho más, que requieren procesamiento de datos en tiempo real con baja latencia.",
  },
  {
    question:
      "¿Cuál de los siguientes es un servicio de AWS que proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS?",
    options: [
      { position: 1, option: "AWS GuardDuty" },
      { position: 2, option: "AWS Trusted Advisor" },
      { position: 3, option: "AWS Artifact" },
      { position: 4, option: "AWS IAM" },
    ],
    answer: { position: 3, option: "AWS Artifact" },
    justification:
      "AWS Artifact es un servicio que proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS. Permite a los usuarios acceder a informes de auditoría, certificaciones de cumplimiento y acuerdos de seguridad y confidencialidad para cumplir con los requisitos de auditoría y cumplimiento.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS permite a los usuarios establecer y aplicar políticas de seguridad y acceso en toda la organización?",
    options: [
      { position: 1, option: "AWS IAM" },
      { position: 2, option: "AWS Organizations" },
      { position: 3, option: "AWS CloudTrail" },
      { position: 4, option: "AWS Shield" },
    ],
    answer: { position: 2, option: "AWS Organizations" },
    justification:
      "AWS Organizations es un servicio que permite a los usuarios establecer y aplicar políticas de seguridad y acceso en toda la organización. Permite la creación de una jerarquía de cuentas para organizar y administrar recursos de AWS, establecer políticas de seguridad y acceso, y automatizar la implementación y gestión de recursos en toda la organización.",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de ataques de denegación de servicio (DDoS) intenta agotar los recursos del sistema objetivo inundándolo con un gran volumen de solicitudes de conexión SYN?",
    options: [
      {
        position: 1,
        option: "Ataque de denegación de servicio distribuido (DDoS)",
      },
      {
        position: 2,
        option: "Ataque de denegación de servicio de amplificación (DNS)",
      },
      {
        position: 3,
        option: "Ataque de denegación de servicio de inundación SYN",
      },
      {
        position: 4,
        option: "Ataque de denegación de servicio de saturación de red (NTP)",
      },
    ],
    answer: {
      position: 3,
      option: "Ataque de denegación de servicio de inundación SYN",
    },
    justification:
      "Un ataque de denegación de servicio de inundación SYN intenta agotar los recursos del sistema objetivo inundándolo con un gran volumen de solicitudes de conexión SYN. Esto puede hacer que el sistema objetivo se vuelva inaccesible para los usuarios legítimos al agotar su capacidad para manejar nuevas conexiones.",
  },
  {
    question:
      "¿Cuál de los siguientes planes de soporte de AWS proporciona acceso a ingenieros de soporte las 24 horas del día, los 7 días de la semana, tiempos de respuesta de menos de 15 minutos para eventos críticos y sesiones de revisión de arquitectura?",
    options: [
      { position: 1, option: "Basic Support" },
      { position: 2, option: "Developer Support" },
      { position: 3, option: "Business Support" },
      { position: 4, option: "Enterprise Support" },
    ],
    answer: { position: 4, option: "Enterprise Support" },
    justification:
      "El plan de soporte Enterprise Support proporciona acceso a ingenieros de soporte las 24 horas del día, los 7 días de la semana, tiempos de respuesta de menos de 15 minutos para eventos críticos y sesiones de revisión de arquitectura. Está diseñado para empresas que ejecutan cargas de trabajo críticas en AWS y requieren un alto nivel de soporte técnico y consultoría.",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor una ventaja clave de utilizar AWS CloudTrail?",
    options: [
      {
        position: 1,
        option:
          "AWS CloudTrail permite a los usuarios automatizar la implementación y gestión de recursos de AWS utilizando código de infraestructura.",
      },
      {
        position: 2,
        option:
          "AWS CloudTrail proporciona informes de cumplimiento y certificaciones de seguridad para los servicios de AWS.",
      },
      {
        position: 3,
        option:
          "AWS CloudTrail permite a los usuarios analizar y visualizar el rendimiento de sus aplicaciones en tiempo real.",
      },
      {
        position: 4,
        option:
          "AWS CloudTrail registra las actividades de API en AWS y proporciona visibilidad de quién hizo qué y cuándo en la cuenta de AWS.",
      },
    ],
    answer: {
      position: 4,
      option:
        "AWS CloudTrail registra las actividades de API en AWS y proporciona visibilidad de quién hizo qué y cuándo en la cuenta de AWS.",
    },
    justification:
      "AWS CloudTrail registra las actividades de API en AWS y proporciona visibilidad de quién hizo qué y cuándo en la cuenta de AWS. Esto ayuda a los usuarios a auditar y diagnosticar problemas, cumplir con los requisitos de cumplimiento y seguridad, y mejorar la seguridad de la infraestructura de AWS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona recomendaciones automatizadas para optimizar la configuración de recursos y mejorar la seguridad, el rendimiento y la confiabilidad?",
    options: [
      { position: 1, option: "AWS CloudTrail" },
      { position: 2, option: "AWS Trusted Advisor" },
      { position: 3, option: "AWS Inspector" },
      { position: 4, option: "Amazon GuardDuty" },
    ],
    answer: { position: 2, option: "AWS Trusted Advisor" },
    justification:
      "AWS Trusted Advisor es un servicio de AWS que proporciona recomendaciones automatizadas para optimizar la configuración de recursos y mejorar la seguridad, el rendimiento y la confiabilidad. Ofrece asesoramiento en áreas como costos, rendimiento, seguridad y tolerancia a fallos, ayudando a los usuarios a optimizar su infraestructura de AWS y reducir costos operativos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para evaluar y mejorar la seguridad y el cumplimiento de las aplicaciones desplegadas en AWS?",
    options: [
      { position: 1, option: "AWS Inspector" },
      { position: 2, option: "AWS Trusted Advisor" },
      { position: 3, option: "AWS GuardDuty" },
      { position: 4, option: "Amazon Macie" },
    ],
    answer: { position: 1, option: "AWS Inspector" },
    justification:
      "AWS Inspector es un servicio de AWS que se utiliza para evaluar y mejorar la seguridad y el cumplimiento de las aplicaciones desplegadas en AWS. Realiza análisis automatizados de seguridad en busca de vulnerabilidades, configuraciones incorrectas y prácticas inseguras, proporcionando informes detallados y recomendaciones de remedios.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para monitorear y auditar actividades en AWS, proporcionando una visibilidad completa de las acciones realizadas en la cuenta de AWS?",
    options: [
      { position: 1, option: "AWS Inspector" },
      { position: 2, option: "Amazon Macie" },
      { position: 3, option: "AWS CloudTrail" },
      { position: 4, option: "AWS Trusted Advisor" },
    ],
    answer: { position: 3, option: "AWS CloudTrail" },
    justification:
      "AWS CloudTrail es un servicio de AWS que se utiliza para monitorear y auditar actividades en AWS, proporcionando una visibilidad completa de las acciones realizadas en la cuenta de AWS. Registra las actividades de API en AWS y proporciona registros de auditoría que permiten la trazabilidad y la seguridad de la cuenta.",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de ataques de denegación de servicio (DDoS) tiene como objetivo agotar los recursos del sistema objetivo consumiendo ancho de banda de red?",
    options: [
      {
        position: 1,
        option: "Ataque de denegación de servicio distribuido (DDoS)",
      },
      {
        position: 2,
        option: "Ataque de denegación de servicio de inundación SYN",
      },
      {
        position: 3,
        option: "Ataque de denegación de servicio amplificado (DNS)",
      },
      {
        position: 4,
        option: "Ataque de denegación de servicio de saturación de red (NTP)",
      },
    ],
    answer: {
      position: 4,
      option: "Ataque de denegación de servicio de saturación de red (NTP)",
    },
    justification:
      "Un ataque de denegación de servicio de saturación de red (NTP) tiene como objetivo agotar los recursos del sistema objetivo consumiendo ancho de banda de red. Esto se logra enviando una gran cantidad de paquetes de datos falsificados a través de la red, lo que hace que el sistema objetivo se sobrecargue y se vuelva inaccesible para los usuarios legítimos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona protección contra ataques de denegación de servicio (DDoS) en capas 3 y 4?",
    options: [
      { position: 1, option: "AWS Shield" },
      { position: 2, option: "AWS WAF" },
      { position: 3, option: "Amazon GuardDuty" },
      { position: 4, option: "AWS Firewall Manager" },
    ],
    answer: { position: 1, option: "AWS Shield" },
    justification:
      "AWS Shield es un servicio de AWS que proporciona protección contra ataques de denegación de servicio (DDoS) en capas 3 y 4 de la red. Ofrece protección automática y escalable contra los ataques DDoS más comunes, ayudando a mantener la disponibilidad de las aplicaciones y los servicios de AWS.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones empresariales?",
    options: [
      { position: 1, option: "Amazon RDS" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon S3" },
      { position: 4, option: "Amazon EBS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de transacciones, en aplicaciones empresariales que requieren alta disponibilidad y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de eventos en tiempo real para aplicaciones de IoT?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "AWS IoT Events" },
      { position: 3, option: "Amazon SQS" },
      { position: 4, option: "Amazon SNS" },
    ],
    answer: { position: 2, option: "AWS IoT Events" },
    justification:
      "AWS IoT Events es un servicio de AWS que permite detectar y responder automáticamente a eventos generados por dispositivos IoT en tiempo real. Proporciona una manera fácil de detectar patrones de eventos y tomar acciones basadas en reglas personalizadas, lo que facilita la automatización de procesos en aplicaciones de IoT.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de análisis de big data en tiempo real?",
    options: [
      { position: 1, option: "Amazon Redshift" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon QuickSight" },
    ],
    answer: { position: 2, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es un servicio de AWS que permite procesar grandes volúmenes de datos utilizando frameworks de código abierto como Hadoop, Spark y Presto en tiempo real. Facilita la implementación y administración de clústeres de big data, lo que permite realizar análisis avanzados y obtener información valiosa de los datos.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de reconocimiento facial en tiempo real?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon Translate" },
      { position: 4, option: "Amazon Transcribe" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de reconocimiento facial. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de almacenamiento de datos altamente duradero y escalable para aplicaciones móviles?",
    options: [
      { position: 1, option: "Amazon S3" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon Glacier" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 2, option: "Amazon DynamoDB" },
    justification:
      "Amazon DynamoDB es un servicio de AWS que proporciona un sistema de base de datos NoSQL completamente administrado y altamente escalable. Es ideal para almacenar datos estructurados, como perfiles de usuarios, preferencias de aplicaciones y datos de juego, en aplicaciones móviles que requieren acceso rápido y escalabilidad automática.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de imágenes en tiempo real para aplicaciones de visión por computadora?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Comprehend" },
      { position: 3, option: "Amazon Textract" },
      { position: 4, option: "Amazon SageMaker" },
    ],
    answer: { position: 1, option: "Amazon Rekognition" },
    justification:
      "Amazon Rekognition es un servicio de AWS que permite analizar imágenes y vídeos para identificar objetos, personas, texto y contenido inapropiado utilizando tecnología de visión por computadora. Es útil para aplicaciones de seguridad, marketing, análisis de contenido y mucho más.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de entrega de contenido en la nube con baja latencia y alta disponibilidad?",
    options: [
      { position: 1, option: "Amazon CloudFront" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "AWS Direct Connect" },
    ],
    answer: { position: 1, option: "Amazon CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de AWS que proporciona una red de entrega de contenido global para distribuir contenido web, streaming de vídeo y aplicaciones a usuarios finales con baja latencia y alta disponibilidad. Utiliza una red de ubicaciones de borde distribuidas estratégicamente para mejorar el rendimiento y reducir la carga en los servidores de origen.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de orquestación de contenedores altamente escalable?",
    options: [
      { position: 1, option: "Amazon ECS" },
      { position: 2, option: "AWS Lambda" },
      { position: 3, option: "Amazon EKS" },
      { position: 4, option: "AWS Batch" },
    ],
    answer: { position: 3, option: "Amazon EKS" },
    justification:
      "Amazon EKS (Elastic Kubernetes Service) es un servicio de AWS que permite ejecutar contenedores Docker en un entorno Kubernetes administrado. Proporciona escalabilidad, disponibilidad y seguridad para aplicaciones basadas en contenedores, facilitando la implementación y gestión de cargas de trabajo contenerizadas a gran escala.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS se utiliza para implementar un sistema de procesamiento de flujo de datos en tiempo real para aplicaciones analíticas?",
    options: [
      { position: 1, option: "Amazon Kinesis" },
      { position: 2, option: "Amazon EMR" },
      { position: 3, option: "Amazon Athena" },
      { position: 4, option: "Amazon Redshift" },
    ],
    answer: { position: 1, option: "Amazon Kinesis" },
    justification:
      "Amazon Kinesis es un servicio de AWS que permite recopilar, procesar y analizar datos en tiempo real a gran escala. Es ideal para aplicaciones analíticas, como análisis de clics, detección de fraudes, monitorización de flujos de log y mucho más, que requieren procesamiento de datos en tiempo real con baja latencia.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja significativa al permitir a las organizaciones pagar solo por los recursos informáticos que consumen?",
    options: [
      { position: 1, option: "AWS Identity and Access Management (IAM)" },
      { position: 2, option: "AWS Free Tier" },
      { position: 3, option: "AWS Elasticity" },
      { position: 4, option: "AWS Pay-As-You-Go Pricing Model" },
    ],
    answer: { position: 4, option: "AWS Pay-As-You-Go Pricing Model" },
    justification:
      "El modelo de precios de pago por uso de AWS permite a las organizaciones pagar solo por los recursos informáticos que consumen, lo que proporciona una flexibilidad y un control significativos sobre los costos operativos. Esto les permite escalar recursos según sea necesario y optimizar su presupuesto de TI.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS ofrece una ventaja estratégica al permitir a las organizaciones innovar más rápidamente al reducir el tiempo necesario para aprovisionar recursos informáticos?",
    options: [
      { position: 1, option: "AWS Data Transfer Acceleration" },
      { position: 2, option: "AWS Elastic Beanstalk" },
      { position: 3, option: "AWS Auto Scaling" },
      { position: 4, option: "AWS On-Demand Instances" },
    ],
    answer: { position: 2, option: "AWS Elastic Beanstalk" },
    justification:
      "AWS Elastic Beanstalk es un servicio que facilita la implementación y administración de aplicaciones web escalables utilizando AWS. Al automatizar el aprovisionamiento de recursos informáticos, Elastic Beanstalk permite a las organizaciones reducir el tiempo necesario para implementar nuevas aplicaciones o actualizar las existentes, lo que acelera el proceso de innovación.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones adaptarse rápidamente a las cambiantes condiciones del mercado?",
    options: [
      { position: 1, option: "AWS Global Infrastructure" },
      { position: 2, option: "AWS Reserved Instances" },
      { position: 3, option: "AWS Relational Database Service (RDS)" },
      { position: 4, option: "AWS Lambda" },
    ],
    answer: { position: 1, option: "AWS Global Infrastructure" },
    justification:
      "La infraestructura global de AWS proporciona una ventaja estratégica al permitir a las organizaciones adaptarse rápidamente a las cambiantes condiciones del mercado. Con centros de datos distribuidos en todo el mundo, AWS permite a las organizaciones desplegar aplicaciones y servicios en regiones geográficas específicas para optimizar el rendimiento y la disponibilidad para sus usuarios finales.",
  },
  {
    question:
      "¿Cuál de los siguientes atributos de AWS proporciona una ventaja clave al permitir a las organizaciones escalar recursos según sea necesario para satisfacer la demanda del negocio?",
    options: [
      { position: 1, option: "AWS Security Groups" },
      { position: 2, option: "AWS Auto Scaling" },
      { position: 3, option: "AWS Direct Connect" },
      { position: 4, option: "AWS CloudFormation" },
    ],
    answer: { position: 2, option: "AWS Auto Scaling" },
    justification:
      "AWS Auto Scaling es un servicio que permite a las organizaciones escalar automáticamente los recursos informáticos según sea necesario para satisfacer la demanda del negocio. Esto proporciona una ventaja clave al garantizar que las aplicaciones tengan la capacidad adecuada para manejar picos de tráfico sin exceso de provisionamiento, lo que optimiza los costos y mejora el rendimiento.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona una ventaja competitiva al permitir a las organizaciones ejecutar cargas de trabajo sin necesidad de administrar la infraestructura subyacente?",
    options: [
      { position: 1, option: "Amazon EC2" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "AWS Lambda" },
      { position: 4, option: "Amazon RDS" },
    ],
    answer: { position: 3, option: "AWS Lambda" },
    justification:
      "AWS Lambda es un servicio de computación sin servidor que permite a las organizaciones ejecutar código sin necesidad de aprovisionar ni administrar servidores. Esto proporciona una ventaja competitiva al reducir la carga operativa y permitir un enfoque más centrado en el desarrollo de aplicaciones, lo que acelera el tiempo de comercialización y mejora la agilidad empresarial.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones aumentar la resiliencia y la redundancia de sus aplicaciones?",
    options: [
      { position: 1, option: "AWS CloudTrail" },
      { position: 2, option: "AWS Multi-AZ Deployments" },
      { position: 3, option: "Amazon Route 53" },
      { position: 4, option: "AWS CodeDeploy" },
    ],
    answer: { position: 2, option: "AWS Multi-AZ Deployments" },
    justification:
      "Las implementaciones multi-zona de AWS permiten a las organizaciones aumentar la resiliencia y la redundancia de sus aplicaciones al distribuir automáticamente las cargas de trabajo en múltiples zonas de disponibilidad dentro de una región de AWS. Esto proporciona una ventaja estratégica al mejorar la disponibilidad y la tolerancia a fallos de las aplicaciones, lo que reduce el riesgo de tiempo de inactividad no planificado y mejora la experiencia del usuario final.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja competitiva al permitir a las organizaciones optimizar el rendimiento y la latencia de sus aplicaciones?",
    options: [
      { position: 1, option: "Amazon Aurora" },
      { position: 2, option: "AWS Direct Connect" },
      { position: 3, option: "Amazon CloudFront" },
      { position: 4, option: "AWS Lambda" },
    ],
    answer: { position: 3, option: "Amazon CloudFront" },
    justification:
      "Amazon CloudFront es un servicio de CDN (Content Delivery Network) que permite a las organizaciones distribuir contenido web y de streaming con baja latencia y alto rendimiento a usuarios finales de todo el mundo. Esto proporciona una ventaja competitiva al mejorar la experiencia del usuario final y la velocidad de carga de las aplicaciones, lo que puede resultar en una mayor retención de usuarios y un mejor posicionamiento en los motores de búsqueda.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la seguridad y el cumplimiento de sus aplicaciones?",
    options: [
      { position: 1, option: "AWS Key Management Service (KMS)" },
      { position: 2, option: "AWS Shield" },
      { position: 3, option: "Amazon VPC" },
      { position: 4, option: "AWS Config" },
    ],
    answer: { position: 1, option: "AWS Key Management Service (KMS)" },
    justification:
      "AWS Key Management Service (KMS) es un servicio de gestión de claves que permite a las organizaciones crear y controlar el acceso a las claves de cifrado utilizadas para proteger los datos en AWS. Esto proporciona una ventaja estratégica al mejorar la seguridad y el cumplimiento de las aplicaciones al garantizar el control completo sobre el cifrado de datos y el cumplimiento de los estándares de seguridad.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja competitiva al permitir a las organizaciones mejorar la eficiencia operativa y reducir los costos de gestión de infraestructura?",
    options: [
      { position: 1, option: "Amazon RDS Performance Insights" },
      { position: 2, option: "Amazon S3 Intelligent-Tiering" },
      { position: 3, option: "Amazon ECS Fargate" },
      { position: 4, option: "AWS Config Rules" },
    ],
    answer: { position: 3, option: "Amazon ECS Fargate" },
    justification:
      "Amazon ECS Fargate es un servicio de contenedores sin servidor que permite a las organizaciones ejecutar contenedores en la nube de AWS sin necesidad de aprovisionar ni administrar servidores. Esto proporciona una ventaja competitiva al mejorar la eficiencia operativa y reducir los costos de gestión de infraestructura al eliminar la necesidad de administrar servidores subyacentes.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones aprovechar las capacidades avanzadas de inteligencia artificial y aprendizaje automático?",
    options: [
      { position: 1, option: "Amazon Rekognition" },
      { position: 2, option: "Amazon Polly" },
      { position: 3, option: "Amazon SageMaker" },
      { position: 4, option: "Amazon Comprehend" },
    ],
    answer: { position: 3, option: "Amazon SageMaker" },
    justification:
      "Amazon SageMaker es un servicio de AWS que permite a las organizaciones crear, entrenar y implementar modelos de aprendizaje automático de forma rápida y sencilla. Esto proporciona una ventaja estratégica al permitir a las organizaciones aprovechar las capacidades avanzadas de inteligencia artificial y aprendizaje automático para mejorar la toma de decisiones, la automatización de procesos y la personalización de la experiencia del cliente.",
  },
  {
    question:
      "¿Cuál de los siguientes atributos de AWS proporciona una ventaja competitiva al permitir a las organizaciones implementar arquitecturas de nube híbrida y extender sus infraestructuras locales a la nube?",
    options: [
      { position: 1, option: "AWS Outposts" },
      { position: 2, option: "Amazon EBS Snapshots" },
      { position: 3, option: "Amazon RDS Read Replicas" },
      { position: 4, option: "Amazon S3 Transfer Acceleration" },
    ],
    answer: { position: 1, option: "AWS Outposts" },
    justification:
      "AWS Outposts es un servicio de AWS que permite a las organizaciones implementar infraestructuras de nube híbrida al extender los servicios de AWS a centros de datos locales. Esto proporciona una ventaja competitiva al permitir a las organizaciones aprovechar las capacidades de la nube de AWS mientras mantienen aplicaciones y datos sensibles en las instalaciones locales, lo que garantiza el cumplimiento normativo y la seguridad de los datos.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la disponibilidad y la resiliencia de sus aplicaciones mediante la replicación automática de datos entre regiones de AWS?",
    options: [
      { position: 1, option: "AWS Direct Connect" },
      { position: 2, option: "Amazon S3 Cross-Region Replication" },
      { position: 3, option: "Amazon RDS Multi-AZ Deployments" },
      { position: 4, option: "Amazon CloudFront" },
    ],
    answer: { position: 2, option: "Amazon S3 Cross-Region Replication" },
    justification:
      "La replicación entre regiones de Amazon S3 permite a las organizaciones mejorar la disponibilidad y la resiliencia de sus aplicaciones al replicar automáticamente los datos entre regiones de AWS. Esto proporciona una ventaja estratégica al garantizar la redundancia de datos geográfica, lo que minimiza el riesgo de pérdida de datos y aumenta la disponibilidad de los servicios.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja competitiva al permitir a las organizaciones mejorar la seguridad de sus aplicaciones mediante la detección y la respuesta automatizadas a amenazas cibernéticas?",
    options: [
      { position: 1, option: "AWS Security Hub" },
      { position: 2, option: "Amazon GuardDuty" },
      { position: 3, option: "Amazon Inspector" },
      { position: 4, option: "AWS WAF" },
    ],
    answer: { position: 2, option: "Amazon GuardDuty" },
    justification:
      "Amazon GuardDuty es un servicio de seguridad administrado que utiliza el aprendizaje automático para detectar de forma continua y responder automáticamente a actividades sospechosas y maliciosas en la nube de AWS. Esto proporciona una ventaja competitiva al mejorar la seguridad de las aplicaciones y los datos al tiempo que reduce la carga operativa asociada con la detección y la respuesta a amenazas cibernéticas.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la visibilidad y el control de su entorno de nube mediante la centralización de registros y la generación de informes de cumplimiento?",
    options: [
      { position: 1, option: "Amazon CloudWatch" },
      { position: 2, option: "AWS Config" },
      { position: 3, option: "AWS Artifact" },
      { position: 4, option: "Amazon VPC Flow Logs" },
    ],
    answer: { position: 3, option: "AWS Artifact" },
    justification:
      "AWS Artifact es un servicio que proporciona acceso bajo demanda a informes de cumplimiento y documentación de seguridad para ayudar a las organizaciones a cumplir con los requisitos regulatorios y de auditoría. Esto proporciona una ventaja estratégica al mejorar la visibilidad y el control del entorno de nube al centralizar registros y generar informes de cumplimiento de manera eficiente.",
  },
  {
    question:
      "¿Cuál de los siguientes atributos de AWS proporciona una ventaja competitiva al permitir a las organizaciones automatizar la implementación, la configuración y la administración de su infraestructura como código?",
    options: [
      { position: 1, option: "AWS Systems Manager" },
      { position: 2, option: "Amazon VPC" },
      { position: 3, option: "AWS CloudFormation" },
      { position: 4, option: "AWS Step Functions" },
    ],
    answer: { position: 3, option: "AWS CloudFormation" },
    justification:
      "AWS CloudFormation es un servicio que permite a las organizaciones definir su infraestructura como código y automatizar la implementación, la configuración y la administración de recursos de AWS de manera consistente y reproducible. Esto proporciona una ventaja competitiva al mejorar la eficiencia operativa y reducir el riesgo de errores humanos al tiempo que acelera el tiempo de comercialización de las aplicaciones.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones implementar soluciones de análisis de datos escalables y rentables?",
    options: [
      { position: 1, option: "Amazon Redshift" },
      { position: 2, option: "Amazon Athena" },
      { position: 3, option: "Amazon EMR" },
      { position: 4, option: "Amazon QuickSight" },
    ],
    answer: { position: 3, option: "Amazon EMR" },
    justification:
      "Amazon EMR (Elastic MapReduce) es un servicio de AWS que permite a las organizaciones implementar soluciones de análisis de datos escalables y rentables utilizando Apache Hadoop y Apache Spark. Esto proporciona una ventaja estratégica al permitir a las organizaciones procesar grandes volúmenes de datos de manera eficiente y obtener información valiosa para la toma de decisiones empresariales.",
  },
  {
    question:
      "¿Cuál de los siguientes atributos de AWS proporciona una ventaja competitiva al permitir a las organizaciones almacenar y gestionar grandes volúmenes de datos de forma segura y rentable?",
    options: [
      { position: 1, option: "Amazon S3 Glacier" },
      { position: 2, option: "Amazon EBS" },
      { position: 3, option: "Amazon Aurora" },
      { position: 4, option: "AWS Snowball" },
    ],
    answer: { position: 1, option: "Amazon S3 Glacier" },
    justification:
      "Amazon S3 Glacier es un servicio de almacenamiento en la nube de AWS que permite a las organizaciones almacenar grandes volúmenes de datos de forma segura y rentable a largo plazo. Esto proporciona una ventaja competitiva al permitir a las organizaciones cumplir con los requisitos de retención de datos y gestionar el crecimiento exponencial de datos de manera eficiente y económica.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la colaboración y la productividad mediante el acceso seguro a aplicaciones y datos desde cualquier ubicación?",
    options: [
      { position: 1, option: "Amazon WorkSpaces" },
      { position: 2, option: "Amazon WorkDocs" },
      { position: 3, option: "Amazon Chime" },
      { position: 4, option: "AWS Direct Connect" },
    ],
    answer: { position: 1, option: "Amazon WorkSpaces" },
    justification:
      "Amazon WorkSpaces es un servicio de escritorio en la nube de AWS que permite a las organizaciones proporcionar escritorios virtuales seguros y administrados a usuarios finales desde cualquier ubicación. Esto proporciona una ventaja estratégica al mejorar la colaboración y la productividad al permitir a los empleados acceder de forma segura a aplicaciones y datos desde cualquier dispositivo y ubicación.",
  },
  {
    question:
      "¿Cuál de los siguientes atributos de AWS proporciona una ventaja competitiva al permitir a las organizaciones implementar soluciones de almacenamiento escalables y seguras?",
    options: [
      { position: 1, option: "Amazon EFS" },
      { position: 2, option: "Amazon S3" },
      { position: 3, option: "Amazon FSx" },
      { position: 4, option: "Amazon EBS" },
    ],
    answer: { position: 1, option: "Amazon EFS" },
    justification:
      "Amazon EFS (Elastic File System) es un servicio de almacenamiento en la nube de AWS que proporciona un sistema de archivos escalable y seguro para cargas de trabajo basadas en archivos. Esto proporciona una ventaja competitiva al permitir a las organizaciones almacenar y acceder a datos de forma segura y escalable, lo que facilita la administración de grandes volúmenes de datos y la implementación de aplicaciones basadas en archivos.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la escalabilidad y la agilidad de sus aplicaciones mediante la implementación de arquitecturas de microservicios?",
    options: [
      { position: 1, option: "AWS Step Functions" },
      { position: 2, option: "Amazon ECS" },
      { position: 3, option: "Amazon SNS" },
      { position: 4, option: "AWS Lambda" },
    ],
    answer: { position: 2, option: "Amazon ECS" },
    justification:
      "Amazon ECS (Elastic Container Service) es un servicio de contenedores de AWS que permite a las organizaciones implementar, administrar y escalar fácilmente contenedores Docker en la nube de AWS. Esto proporciona una ventaja estratégica al permitir a las organizaciones mejorar la escalabilidad y la agilidad de sus aplicaciones mediante la implementación de arquitecturas de microservicios, lo que facilita la iteración rápida y la implementación continua.",
  },
  {
    question:
      "¿Cuál de los siguientes servicios de AWS proporciona una ventaja competitiva al permitir a las organizaciones mejorar la eficiencia operativa y reducir los costos de almacenamiento de datos no estructurados?",
    options: [
      { position: 1, option: "Amazon RDS" },
      { position: 2, option: "Amazon DynamoDB" },
      { position: 3, option: "Amazon S3" },
      { position: 4, option: "Amazon Glacier" },
    ],
    answer: { position: 3, option: "Amazon S3" },
    justification:
      "Amazon S3 (Simple Storage Service) es un servicio de almacenamiento en la nube de AWS que proporciona una solución escalable y segura para almacenar datos no estructurados. Esto proporciona una ventaja competitiva al permitir a las organizaciones mejorar la eficiencia operativa y reducir los costos de almacenamiento de datos no estructurados al tiempo que garantiza la durabilidad y la disponibilidad de los datos.",
  },
  {
    question:
      "¿Cuál de las siguientes características de AWS proporciona una ventaja estratégica al permitir a las organizaciones mejorar la seguridad y el cumplimiento de sus aplicaciones mediante la gestión centralizada de identidades y accesos?",
    options: [
      { position: 1, option: "AWS IAM Access Analyzer" },
      { position: 2, option: "AWS Cognito" },
      { position: 3, option: "AWS Directory Service" },
      { position: 4, option: "AWS Secrets Manager" },
    ],
    answer: { position: 2, option: "AWS Cognito" },
    justification:
      "AWS Cognito es un servicio de AWS que permite a las organizaciones gestionar centralmente la identidad y el acceso de los usuarios a las aplicaciones mediante la autenticación y la autorización basadas en estándares abiertos. Esto proporciona una ventaja estratégica al mejorar la seguridad y el cumplimiento de las aplicaciones al garantizar el control granular sobre quién tiene acceso a qué recursos.",
  },
];

export default questions;
