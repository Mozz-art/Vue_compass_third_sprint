export default function Regions (region) {
    let states = "";

    switch (region) {
      case "Acre":
        states = "AC";
        break;
      case "Alagoas":
        states = "AL";
        break;
      case "Amapá":
        states = "AP";
        break;
      case "Amazonas":
        states = "AM";
        break;
      case "Bhaia":
        states = "BA";
        break;
      case "Ceará":
        states = "CE";
        break;
      case "Espírito Santo":
        states = "ES";
        break;
      case "Goiás":
        states = "GO";
        break;
      case "Maranhão":
        states = "MA";
        break;
      case "Mato Grosso":
        states = "MT";
        break;
      case "Mato Grosso do Sul":
        states = "MS";
        break;
      case "Minas Gerais":
        states = "MG";
        break;
      case "Pará":
        states = "PA";
        break;
      case "Paraíba":
        states = "PB";
        break;
      case "Paraná":
        states = "PR";
        break;
      case "Pernambuco":
        states = "PE";
        break;
      case "Piauí":
        states = "PI";
        break;
      case "Rio de Janeiro":
        states = "RJ";
        break;
      case "Rio Grande do Norte":
        states = "RN";
        break;
      case "Rio Grande do Sul":
        states = "RS";
        break;
      case "Rondônia":
        states = "RO";
        break;
      case "Roraima":
        states = "RR";
        break;
      case "Santa Catarina":
        states = "SC";
        break;
      case "São Paulo":
        states = "SP";
        break;
      case "Sergipe":
        states = "SE";
        break;
      case "Tocantins":
        states = "TO";
        break;
    }
    return states;
  }