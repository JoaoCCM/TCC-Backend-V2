## Connect<IF>

### API Documentation

### - **(GET) Teacher Data -**

- _return teacher data based on name ._

```curl
 /teacher/?name=${teacherName}
```

### Query string parameters

| Params | Type   | Format   | Example                | Required |
| ------ | ------ | -------- | ---------------------- | -------- |
| name   | string | `string` | "Andre Marcelo Panhan" | true     |

### Sample Response

```json
{
  "AreaAtuacao": {
    "relationshipName": "atua",
    "items": [
      {
        "relationshipProp": {},
        "properties": {
          "nome": "Grande área: Ciências Exatas e da Terra / Área: Ciência da Computação / Subárea: Metodologia e Técnicas da Computação/Especialidade: Engenharia de Software."
        }
      }
    ]
  },
  "Orientacao": {
    "relationshipName": "orientou",
    "items": [
      {
        "relationshipProp": {},
        "properties": {
          "tituloTrabalho": "Sistema de Mensagens Instantâneas Mobile Baseado no Servidor Openfire",
          "tipo": "TCC"
        }
      }
    ]
  },
  "FormacaoAcademica": {
    "relationshipName": "formado",
    "items": [
      {
        "relationshipProp": {
          "nome_instituicao": "Universidade Estadual de Campinas, UNICAMP, Brasil"
        },
        "properties": {
          "tipo": "Doutorado em Doutorado em Engenharia Elétrica"
        }
      }
    ]
  },
  "Idioma": {
    "relationshipName": "temConhecimento",
    "items": [
      {
        "relationshipProp": {
          "proficiencia": "Compreende Bem, Fala Bem, Lê Bem, Escreve Bem."
        },
        "properties": {
          "nome": "Inglês"
        }
      }
    ]
  }
}
```

### - **(POST) Create User -**

- _create a new user ._

```curl
 /user
```

#### Body example

```json
{
  "nome": "Beatriz",
  "email": "beatriz@gmail.com",
  "senha": "123456",
  "foto": "foto",
  "curso": "ADS"
}
```

#### Query string parameters

| Params | Type   | Format   | Example             | Required |
| ------ | ------ | -------- | ------------------- | -------- |
| name   | string | `string` | `Beatriz`           | true     |
| email  | string | `string` | `beatriz@gmail.com` | true     |
| senha  | string | `string` | `123456`            | true     |
| foto   | string | `string` | `foto`              | true     |
| curso  | string | `string` | `ADS`               | true     |

#### Sample Response

```json
{
  "result": {}
}
```
