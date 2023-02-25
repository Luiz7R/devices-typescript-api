## Instalação:

    Requisitos: npm, NodeJS

    NodeJS: >= 6.9.0

    npm install

# Banco de Dados:

## Se estiver Usando o Docker:

### o env deverá ficar assim:

```
MONGODB_URL=mongodb://localhost:27017
```

- Rodar no terminal:

```
docker compose up -d
```

- Ver os containers

```
docker ps
```

### Para se conectar com o mongoDB, usei o MongoDBCompass, baixe aqui:

### https://www.mongodb.com/try/download/compass

- Abre o MongoDBCompass
- e no URI coloque: mongodb://localhost:27017

![newConnection](https://user-images.githubusercontent.com/54550561/221357080-6ba332fd-f8f7-4fc5-aa74-86122120ce07.png)

- Clique em Advanced Connection Options :

![advancedConnection](https://user-images.githubusercontent.com/54550561/221357192-985eef68-0a5c-419a-a7d6-640695c200aa.png)

- Selecione Username/Password :

![image](https://user-images.githubusercontent.com/54550561/221357259-43eac970-03ba-4b18-a618-15ee1e9b94a8.png)

- Coloque seu Usuario e Senha, como:

```
username: root
password: password
```

- esse usuario e senha é como está definido no arquivo:
  docker-composer.yaml

- e clique em Connect
- e estará conectado:

![connected](https://user-images.githubusercontent.com/54550561/221357502-e249af98-b491-44af-9cf1-953843d5c48f.png)

### <br><br>

## Se estiver usando o Atlas MongoDB, seguir esse passo a passo:

- Adicione seu IP em Add Current IP Adress:

![DBMongo](https://user-images.githubusercontent.com/54550561/221354077-fc82298b-4822-421f-b704-acc26b0ae740.png)

- Crie o Banco de Dados:

![DBMongo1](https://user-images.githubusercontent.com/54550561/221354586-89e29098-5fb5-464b-86b5-c648fcf670de.png)

- Escolha o Cluster: Selecione o Free

![DBMongo2](https://user-images.githubusercontent.com/54550561/221354688-a75eea8e-ad93-4dbb-9369-a31f945f8cbf.png)

- Escolha a Região São Paulo, e Mude o nome do cluster se quiser, eu deixei Cluster0 :

![DBMongo3](https://user-images.githubusercontent.com/54550561/221354691-1c8a2f07-1324-4052-8bbc-1ae4fdef9945.png)

- Escolha seu Usuário e Senha:

![DBMongo4](https://user-images.githubusercontent.com/54550561/221354850-35b0d873-54ae-4a40-8db9-c2cbea6f88b0.png)

- Como Cadastramos o IP Anteriormente clique em Finish and Close :

![DBMongo5](https://user-images.githubusercontent.com/54550561/221354877-f7f53ea0-b08d-4590-9313-822512a7e70d.png)

- Desmarque o Checkbox, e clique em Go to Databases :

![Screenshot_1](https://user-images.githubusercontent.com/54550561/221355238-ef6f2cfb-9b4a-404e-b71f-0a71e5b7be68.png)

- Agora, clique em connect, para configurar o Mongo na Aplicação:

![DBMongo6](https://user-images.githubusercontent.com/54550561/221354925-99f933b0-ca5c-4f51-a9a6-42074f99f8bd.png)

- Clique em Connect your application:

![ConnectAPP](https://user-images.githubusercontent.com/54550561/221355151-ede4ba34-41e9-49b0-a18a-3786a52cc51f.png)

### Copiar o Link do Cluster:

### Ele tem que ficar assim:

cluster0.kkgl7re2721qp.mongodb.net

![DBMongo7](https://user-images.githubusercontent.com/54550561/221354953-3b9fc9e5-6319-4d0c-8178-07c3ed91c734.png)

### Configure no ENV, deverá ficar assim:

```
MONGODB_URL=mongodb+srv://cluster0.kkgl7re27qp.mongodb.net

```

# Configurar MQTT:

### Baixe o MQTT em :

### https://mosquitto.org/download/

### Após baixar abra o Terminal que está usando, se for windows powershell, executar como Administrador

### e de o seguinte comando:

```
net start mosquitto
```

### e Depois:

```
netstat -a
```

### vai aparecer uma lista de ip, encontre essa:

![IPS](https://user-images.githubusercontent.com/54550561/221357916-f76b0a13-2a24-436a-8298-54099f44f628.png)

### esse ip é o do MQTT, é o sinal que está rodando.

<br>

### Rodar no LINUX UBUNTU:

- Se houver firewall ativado na máquina, libere as portas: 1883 e 8883

### para atualizar a lista de pacotes:

```
sudo apt update -y
```

### Execute o comando para instalar o MQTT:

```
sudo apt install mosquitto mosquitto-clients -y
```

### Verifique que está rodando com o comando:

```
sudo systemctl status mosquitto | grep Active
```

### Após esse comando deve aparecer:

```
"Active: active (running) since..."
```

### Para fazer o envio de mensagens com o MQTT usei o app do chrome MQTTLens:

<a href="https://chrome.google.com/webstore/detail/mqttlens/hemojaaeigabkbcookmlgmdigohjobjm">MQTTLens</a>

Após sua instalação, clique no aplicativo de instalação ou inicialização e execute.

Aplicativos do chrome fica na url:

chrome://apps/

- Apos abrir o MQTTLens vamos adicionar a nossa conexão:

![mqttLensInit](https://user-images.githubusercontent.com/54550561/221358727-10d3b82e-52f7-4a77-93a8-0b1ac9cc1b51.png)

- Clique no +

- Abrirá a Seguinte janela:

![configureConnection](https://user-images.githubusercontent.com/54550561/221358789-9abc363d-5b67-4111-a791-d485eae7fe67.png)

- Preencha como está na tela, o ClientID só cliquerar em generate

- e Depois clique em Create Connection:

![createconnect](https://user-images.githubusercontent.com/54550561/221358946-6ab0fcca-9102-4c02-88b0-17e56e9a75a3.png)

- Agora no Subscribe, colocar deviceChannel e clique em SUBSCRIBE

![subscribeChannel](https://user-images.githubusercontent.com/54550561/221359023-7b9f2e60-308f-42d6-8f18-9396abfa4026.png)

- Pronto, agora está configurado e esta mostrando abaixo as ultimas mensagens e as inscrições:

![configured](https://user-images.githubusercontent.com/54550561/221359058-45e197f2-f262-449d-930a-88a091af9d7e.png)

e Enviando mensagens por MQTT fica assim:

![image](https://user-images.githubusercontent.com/54550561/221359545-8aca0932-97ee-43f6-8999-f271cf96c8a3.png)

Enviando os Dados por um JSON, com os seguintes campos:

```
id,temperature,humidity,luminosity
```

e o JSON fica assim:

```
{"id": "63f67a506d9a73aa245149df","temperature":22.5,"humidity":41.5,"luminosity":8.5}
```

- Os campos obrigatórios são o id, e algum dos três campos: temperature, humidity, luminosity

# Rodar o Sistema com :

```
yarn start:dev
```
