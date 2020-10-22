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
| name   | string | `number` | "Andre Marcelo Panhan" | true     |

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
