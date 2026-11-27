/* Datos de la cartilla. Fuente: POE-C01, Manual de Comunicaciones del CBPM, versión 1.0 (25-05-2020). */
(function(){
  var cats = [
    {id:"general",lb:"General",ic:"📻",cl:"#E63946",ds:[
      ["0-0","Silenciar transmisiones radiales hasta nueva orden"],["0-1","Dé y/o amplíe el Preinforme"],["0-2","Se consulta y se informa..."],["0-3","Repita en forma lenta y pausada"],["0-4","Indica de qué se trata..."],["0-5","Indique su ubicación"],["0-6","Diríjase al lugar con alarmas"],["0-7","Llegue al lugar sin alarmas"],["0-8","Fuera de servicio"],["0-9","En servicio"],["0-10","Regrese a su Cuartel"],["0-11","Guardia preventiva"],["0-12","Transmita por el equipo radial del Material Mayor"]]},
    {id:"solicitudes",lb:"Solicitudes",ic:"🚨",cl:"#457B9D",ds:[
      ["1-0","Se solicita Carabineros"],["1-1","Se solicita Apoyo aéreo"],["1-2","Se solicita Ambulancia"],["1-3","Se solicita Personal de la Municipalidad"],["1-4","Se solicita Empresa que se indica..."],["1-5","Se solicita CONAF"],["1-6","Se solicita Comandante de Guardia"],["1-7","Se solicita Capitán de Guardia"],["1-8","Se solicita Depto. Investigación de Incendios"],["1-9","Se solicita Equipo USAR"],["1-10","Se solicita Apoyo bomberil que se indica..."],["1-11","Persona que se comunicó con Central acérquese a la máquina"],["1-12","Indique tiempo estimado de llegada de..."]]},
    {id:"despacho",lb:"Despacho",ic:"🚒",cl:"#2A9D8F",ds:[
      ["2-0","Despache al lugar un Carro Bomba"],["2-1","Despache al lugar un Carro Portaescalas"],["2-2","Despache al lugar un Carro de Rescate"],["2-3","Despache al lugar Ambulancia de bomberos"],["2-4","Despache al lugar un Carro Cisterna"],["2-5","Despache al lugar un Carro Haz-Mat"],["2-6","Despache al lugar un Carro... (específico)"],["2-7","Despache al lugar una Mecánica Telescópica"],["2-8","Despache al lugar un Carro de Transporte"],["2-9","Despache al lugar un Brazo Articulado / Snorkel"],["2-10","Despache Material Mayor con Motobomba"],["2-11","Despache Material Mayor con Grupo Electrógeno"],["2-12","Despache Material Mayor con Cascada de Aire Comprimido"],["2-13","Despache al lugar un Carro de Rescate Pesado"],["2-14","Despache al lugar un Carro Bomba Forestal"]]},
    {id:"comunicacion",lb:"Comunicación",ic:"📞",cl:"#E9C46A",ds:[
      ["3-0","Comunicarse con la Central de Alarmas"],["3-1","Comunicarse al Cuartel General"],["3-2","Comunicarse con su Compañía"],["3-3","Comunicarse con su domicilio"],["3-4","Comunicarse con su trabajo"],["3-5","Comunicarse con el número..."],["3-6","Desocupe el teléfono del Cuartel"],["3-7","Se solicita comunicación telefónica al celular"],["33","Se solicita comunicación Urgente"]]},
    {id:"frecuencias",lb:"Frecuencias",ic:"📡",cl:"#8338EC",ds:[
      ["5-0","Frecuencia Nacional de Bomberos"],["5-1","Frec. 1 con repetidor (Despacho)"],["5-2","Frec. 2 con repetidor (Tráfico Normal)"],["5-3","Frec. 3 con repetidor (Oficiales Generales)"],["5-4","Frec. 4 con repetidor (Alerce)"],["5-5","Frecuencia 1 sin repetidor"],["5-6","Frecuencia 2 sin repetidor"],["5-7","Frecuencia 3 sin repetidor"],["5-8","Frecuencia 4 sin repetidor"],["5-9","Frecuencia Interna de Compañía"]]},
    {id:"operacion",lb:"Operación",ic:"⚙️",cl:"#F77F00",ds:[
      ["6-0","Dar Conforme: quién va a cargo, n° bomberos, personal especializado"],["6-1","Material Mayor se dirige sin personal (solo conductor)"],["6-2","Indique la dirección exacta"],["6-3","Material Mayor en el lugar"],["6-4","Se solicita instrucciones"],["6-5","Indique ubicación de grifos próximos"],["6-6","Se solicita más personal al lugar"],["6-7","Situación controlada"],["6-8","Material Mayor se encuentra disponible"],["6-9","Material Mayor se retira"],["6-10","Material Mayor en su Cuartel"],["6-11","Material Mayor en panne"],["6-12","Material Mayor sufrió colisión"],["6-13","Material Mayor se dirige a..."],["6-14","Material Mayor a cargar combustible"],["6-15","Material Mayor a recuperar material en Centro Asistencial"],["6-16","Falsa Alarma"],["6-17","Mantención en Cuartel"]]},
    {id:"mando",lb:"Mando",ic:"🎖️",cl:"#D62828",ds:[
      ["7-0","Establece puesto de mando, ubicación, indica OBAC"],["7-1","Indique horas de llamado, alarma y material concurrente"],["7-2","Indique bombero a cargo, ubicación, labor, armado a grifo"],["7-3","Cadáver en el lugar"],["7-4","Artefacto explosivo o incendiario"],["7-5","Se sufre agresión"],["7-6","Solicite apoyo logístico"],["7-7","Autorización para informar a la prensa"],["7-8","Detenga trabajo y evacúe estructura siniestrada de inmediato"],["7-9","Proceda a evacuar a los moradores del inmueble"]]},
    {id:"comandancia",lb:"Comandancia",ic:"🏛️",cl:"#264653",ds:[
      ["8-0","Comandante o Capitán se encuentra disponible"],["8-1","Comandante o Capitán no se encuentra disponible"],["8-2","Envíe K a Cuartel de... Compañía"],["8-3","Envíe K a mi domicilio"],["8-4","Envíe K a mi oficina"],["8-5","Envíe K a la dirección que se indica..."],["8-6","Me dirijo al lugar por mis propios medios"],["8-7","Concurrir todos los Comandantes"]]},
    {id:"guardia",lb:"Guardia",ic:"🛡️",cl:"#606C38",ds:[
      ["9-0","Guardia preventiva grado..."],["9-0 G1","Guardia de X bomberos por Compañías"],["9-0 G2","Guardia Nocturna desde las... Hrs"],["9-0 G3","Acuartelamiento General Inmediato"]]},
    {id:"servicios",lb:"Tipo Servicio",ic:"🔥",cl:"#BC4749",ds:[
      ["10-0","Llamado Estructural"],["10-0-1","Inflamación Ducto Evacuación de Gases"],["10-0-2","Llamado Estructural (casa, local comercial)"],["10-0-3","Estructural en Altura (sobre 3 pisos)"],["10-0-4","Estructural Industrial"],["10-0-5","Estructura Menor"],["10-0-6","Embarcación"],["10-1","Llamado de Vehículos"],["10-1-1","Incendio Vehículo Menor"],["10-1-2","Incendio Vehículo con Pasajeros"],["10-1-3","Incendio Vehículo Transporte de Carga"],["10-2","Llamado Pastizales y/o Basurero"],["10-2-1","Fuego en basurero"],["10-2-2","Fuego en vegetación"],["10-3","Rescate de Emergencia"],["10-3-1","Rescate Persona Encerrada"],["10-3-2","Rescate de Persona"],["10-3-3","Rescate Persona en Alturas o Desnivel"],["10-3-4","Rescate Persona en Aguas"],["10-3-5","Rescate Persona Estructura Colapsada"],["10-3-6","Rescate Persona Espacios Confinados"],["10-4","Rescate Vehicular"],["10-4-1","Rescate Vehicular Liviano"],["10-4-2","Rescate Vehicular Pesado / muchas víctimas"],["10-4-3","Rescate Vehicular Camión Mat. Peligrosos"],["10-4-4","Rescate Vehicular Desnivel / Agua / Quebrada"],["10-5","Llamado Haz-Mat"],["10-5-1","Derrame de Hidrocarburo"],["10-5-2","Incidente con Materiales Peligrosos"],["10-6","Emanación de Gases"],["10-6-1","Verificar Olor a Combustible"],["10-6-2","Verificar Fuga/Olor Gas Licuado o Natural"],["10-6-3","Explosión de Gas"],["10-6-4","Explosión de Gas con fuego"],["10-7","Llamado Eléctrico"],["10-8","Llamado No Clasificado"],["10-9","Llamado a Otros Servicios"],["10-10","Incendio declarado (1ª Alarma)"],["10-11","Accidente Aéreo"],["10-12","Apoyo a otros Cuerpos de Bomberos"],["10-13","Bomba, Atentados Terroristas, etc."],["10-14","Simulacro"],["10-61","Anular clave anterior"]]},
    {id:"radio",lb:"Radio / Varios",ic:"🔧",cl:"#6D6875",ds:[
      ["11-0","Indique cómo recibe"],["11-1","Fuerte y claro"],["11-2","Se recibe con interferencias"],["11-3","Central solo por frecuencia principal"],["11-4","Indique operador en servicio"],["11-5","Central en transmisión de pruebas"],["11-6","Central transmisión abierta accidentalmente"],["12-1","Asigna cuartel de reemplazo"],["12-2","Retira cuartel de reemplazo"],["12-3","Diríjase al lugar con máxima precaución"],["12-4","Toque sirena del Cuartel"],["12-5","Active inversor de voz"],["12-6","Material Mayor suficiente en el lugar"],["12-7","No armar"],["12-8","Capitán... asume el mando del Cuerpo"],["12-9","Citación a... Compañía"],["12-10","Solicita conductor para..."]]}
  ];
  var cuart = [["R-10","1ª Compañía"],["R-20","2ª Compañía"],["R-30","3ª Compañía"],["R-40","4ª Compañía"],["R-50","5ª Compañía"],["R-60","6ª Compañía"],["R-70","7ª Compañía"],["R-80","8ª Compañía"],["R-90","9ª Compañía"]];

  // Uso correcto de cada clave, resumido de las secciones 5.5, 5.6, 5.7, 5.8 y 5.15 del POE-C01.
  var usos = {
    "0-0": "Si la Central la menciona, se mantiene silencio radial hasta que ella lo termine con «Fin clave 0-0». También termina sola cuando el operador emite un comunicado.",
    "0-1": "La Central la consulta al OBAC cuando pasa un tiempo considerable sin que este haya dado el preinforme.",
    "0-4": "La usa la Central para informar de qué se trata la emergencia. Ejemplo: «0-4, choque de vehículo menor contra árbol, 2 personas lesionadas al interior, una de ellas atrapada».",
    "0-5": "Basta con decir «0-5». Frases como «¿Cuál es su 0-5?» o «indique su 0-5» son redundantes.",
    "0-8": "Unidad de material mayor que no está operativa. La Central lo informa por 5-1 una vez, así: «B-2, 0-8». No se radia para los vehículos K y J, ni en horario de silencio radial (22:00 a 07:45).",
    "0-9": "Material en condiciones de ser usado en el servicio. Igual que el 0-8, no se radia para los vehículos K y J ni en horario de silencio radial.",
    "0-11": "Se utiliza cuando el Comandante lo establece.",
    "1-4": "Ejemplo: «1-4 Essal».",
    "1-8": "En el detalle de uso del POE figura como Departamento de Estudios Técnicos (D.E.T.). Se utiliza para solicitar un investigador de incendios.",
    "1-10": "Se indica el apoyo que se necesita. El POE da como ejemplo pedir la unidad con equipo cascada del Cuerpo de Bomberos de Puerto Varas.",
    "1-12": "Ejemplos: Saesa, Metrogas, Samu.",
    "2-0": "No se indica la unidad: la Central despacha la siguiente según la pauta de despacho y los recursos disponibles. Basta con decir «2-0». Lo mismo vale para toda la serie 2, salvo 2-6.",
    "2-6": "Para pedir una unidad específica. Ejemplo: «2-6 B-6».",
    "3-0": "Omita «realice 3-0» o «haga un 3-0»: la clave habla por sí sola. Lo mismo vale para toda la serie 3.",
    "33": "Un bombero solo puede pedir comunicación con su compañía por evidente emergencia y en clave 33, por teléfono; queda registrado su nombre y el motivo. En horario de silencio radial (22:00 a 07:45) toda comunicación ajena a una emergencia se pide igual, en clave 33.",
    "5-0": "Frecuencia Nacional de Emergencias. Solo para emergencias en que participa más de un Cuerpo, por ejemplo al apoyar al C.B. de Puerto Varas. Cualquier bombero puede reportar una emergencia por esta frecuencia o por teléfono.",
    "5-1": "Frecuencia de despacho y tráfico cotidiano, de uso exclusivo de la Central. Los oficiales autorizados la usan para reportar emergencias y pedir material. Nadie llama a la Central por 5-1 salvo para el despacho de una emergencia.",
    "5-2": "Tráfico normal con la Central: inspectores, ayudantes de comandancia y oficiales de compañía responden sus consultas. En una emergencia puede ser frecuencia de trabajo. Los tenientes llaman a la Central por 5-2, salvo en servicios o emergencias.",
    "5-3": "De uso exclusivo de oficiales generales y Capitán de Guardia para responder a la Central. En una emergencia puede ser frecuencia de trabajo.",
    "5-4": "Tráfico radial de emergencias en el sector Alerce u otro sector que se disponga.",
    "5-9": "Frecuencia interna de cada compañía. Está prohibido pedir 5-9 a la Central para máquinas en tránsito a una emergencia; durante un acto de servicio solo puede pedirlo el OBAC de la emergencia.",
    "6-0": "Se da cuando el bombero a cargo sabe a qué va y dónde va, y solo cuando la Central lo pide. Incluye clave del OBAC (un bombero agrega primer nombre y primer apellido), número de bomberos (cuenta al OBAC, no al conductor) y personal especializado. Ejemplo: «6-0 R-4» / «R-4 conforme, 402, 6, 4 operadores». Mal dicho: «R-6 a cargo del Teniente Segundo más 6 Bomberos».",
    "6-1": "La pieza va solo con conductor. Ejemplo: «6-0 B-10» / «B-10 6-1».",
    "6-2": "Ejemplo: «BX-1 a Central, 6-2» / «6-2, Avenida Colón 983, entre Los Álamos y Los Ulmos». El OBAC puede pedir «Ampliar el 6-2 por Varas/Illapel» para que la Central lo guíe desde ese punto.",
    "6-3": "La primera máquina en llegar debe informarlo y asegurarse de que la Central lo escuchó. Si la ubicación real no coincide con la entregada, debe informar la nueva ubicación.",
    "6-4": "Al pedir otra pieza de material mayor, el OBAC indica la función que cumplirá. Ejemplo: «6-4 para B-5, alimentar a B-1».",
    "6-5": "La Central informa la ubicación de los grifos más cercanos al lugar.",
    "6-6": "Basta con «6-6». La Central activa el tono de atención y lo transmite dos veces, por ejemplo: «6-6 para el 10-4-2 Ecuador con Pérez Rosales».",
    "6-7": "Basta con «6-7 del 10-…»; «Situación 6-7» es redundante. En accidentes se da cuando los pacientes fueron rescatados, liberados o están siendo atendidos por la ambulancia. Forma correcta: «6-7 del 10-4-1», sin agregar «se dejan recomendaciones» ni «se recoge material».",
    "6-8": "La unidad puede responder a cualquier emergencia. Puede estar 6-8 dentro de una emergencia si no tiene material fuera. Un carro bomba no puede darla si su estanque no tiene capacidad óptima de agua.",
    "6-9": "La dice la máquina al retirarse, en lo posible con el estanque lleno. El OBAC no debe decir «6-9 para alguna máquina».",
    "6-10": "El conductor lo informa por teléfono, no por radio, y la Central indica la hora de llegada. Luego la radio de la máquina queda en 5-1 digital.",
    "6-13": "Por ejemplo: eléctrico, mecánico, trámite o ejercicio de compañía. Se informa si la unidad queda disponible o no.",
    "6-14": "Se informa si la máquina queda disponible o no. Ejemplo de la Central: «B-2 6-14, sector Centro, 6-8».",
    "6-15": "Se indica el centro asistencial y si la máquina queda disponible o no.",
    "7-0": "Se indica el lugar del puesto de mando, la clave del OBAC y las frecuencias de trabajo. Ejemplo: «1 a Central» / «7-0, en Alfa, 1».",
    "7-1": "La Central indica la hora de la denuncia, la hora del despacho y el material concurrente.",
    "7-3": "Se informa solo cuando hay una muerte evidente o cuando el personal de ambulancia lo confirma.",
    "7-5": "Para informar que el personal sufrió una agresión.",
    "7-6": "El OBAC indica el tipo de apoyo logístico que requiere y la Central lo gestiona.",
    "7-8": "Los OBAC de las compañías comunican la orden a todo su personal e informan su condición al OBAC de la emergencia. La Central o el CIC la transmite así: «Por orden de (clave del OBAC) 7-8».",
    "9-0": "Se transmite con tono de atención y dos veces. Ejemplo: «9-0 grado 1, 6» significa guardia preventiva de 6 bomberos por compañía.",
    "10-0": "Fuego o emanación de humo cuyo origen está en el interior del inmueble.",
    "10-0-1": "Fuego al interior de un ducto de evacuación de gases (chimenea, caño, etc.).",
    "10-0-2": "Casa habitación, casa desocupada o abandonada; local comercial o de gran afluencia de público fuera de su horario.",
    "10-0-3": "Cualquier inmueble de 3 o más pisos.",
    "10-0-4": "Principio de incendio en depósitos de combustible, hazmat o gas, o en un establecimiento de sector o proceso industrial.",
    "10-0-5": "Fuego en estructura menor sin propagación: kiosco, mediagua, leñera, paradero, etc. También el rebrote de incendio.",
    "10-0-6": "Fuego que afecta a una embarcación, en el agua o en tierra.",
    "10-1": "Fuego o emanación de humo cuyo origen está en un vehículo motorizado.",
    "10-1-1": "Automóvil, camioneta, furgón particular, motocicleta, etc.",
    "10-1-2": "Bus, minibús, furgón escolar o de transporte de pasajeros, etc.",
    "10-1-3": "Camión, maquinaria pesada, etc.",
    "10-2": "Fuego en vegetación o basura: pastizales, matorral, árboles, bosque, contenedores o depósitos de basura, neumáticos, chatarrería, etc.",
    "10-2-1": "Contenedores o depósitos de basura, neumáticos, chatarrería, etc.",
    "10-2-2": "Matorral, pastizal, árboles u otra vegetación.",
    "10-3": "Auxilio de personas encerradas, atrapadas o con riesgo de caída.",
    "10-3-1": "Personas encerradas en ascensor, en un inmueble o en el interior de un vehículo.",
    "10-3-2": "Persona atropellada cerca de un cuartel, caídas de altura o de árboles, caída en pozos o zanjas de menos de 2 m o sobre estructura de hasta 1 piso, extremidad atrapada, paro cardíaco, entre otros.",
    "10-3-3": "Caídas en desnivel, laderas, quebradas, lecho de río o canal (no en su caudal); techos con riesgo de caída sobre 2 m, andamios o estructuras de más de 2 pisos.",
    "10-3-4": "Persona en el caudal de un río, canal, laguna, mar, pozo o lago.",
    "10-3-5": "Persona atrapada por derrumbe de un inmueble de gran envergadura o parte de él, derrumbe de tierra o losas, o bajo un vehículo.",
    "10-3-6": "Tuberías, shaft, ductos, estanques, alcantarillados; caídas en pozos o zanjas de más de 3 m.",
    "10-4": "Personas atrapadas, encerradas o lesionadas dentro de vehículos motorizados tras un accidente de tránsito.",
    "10-4-1": "Choque, colisión o volcamiento de vehículos menores: automóvil, camioneta, furgón, camión ¾.",
    "10-4-2": "Vehículos mayores (buses, camiones, maquinaria pesada), gran cantidad de lesionados o más de 2 personas atrapadas.",
    "10-4-3": "Accidente de tránsito que involucra un vehículo con algún material peligroso.",
    "10-4-4": "Vehículo en desnivel, ladera, quebrada, pozo, lecho de río o en el mar.",
    "10-5": "Derrame, fuga o emanación de materiales peligrosos cuyo origen la Central conoce como tal.",
    "10-5-1": "Derrame de líquidos derivados del petróleo en la vía pública o en un recinto particular.",
    "10-5-2": "Derrame o emanación de sólidos, líquidos o gases, conocidos o desconocidos, en la vía pública o un recinto privado.",
    "10-6": "Emanación de gas licuado (GLP) o gas natural desde redes o cilindros, u olor a combustible desde el alcantarillado, viviendas o edificios.",
    "10-7": "Accidente eléctrico de cualquier tipo o naturaleza.",
    "10-8": "Olor a quemado sin origen conocido, alarma contra incendio activada, estufas u ollas inflamadas sin fuego aparente, amagos ya controlados, o cuando el denunciante no tiene clara la emergencia. Al llegar, el OBAC debe reclasificarla.",
    "10-9": "Solicitudes que no son emergencias y sin personas involucradas: accesos forzados o en altura, inundaciones, voladuras de techumbre, rescate animal, búsqueda de personas, etc. Se despacha con tono de atención y la máquina concurre sin alarma.",
    "10-10": "Primera alarma de incendio decretada por el OBAC. Si es forestal, el operador dice «10-10 Forestal». Si se necesita, siguen la 2ª, 3ª y más alarmas según la tabla de despacho.",
    "10-11": "Apoyo a un aeródromo o aeropuerto ante la emergencia de una aeronave, o caída de un aparato aéreo en un lugar no habilitado.",
    "10-12": "Colaboración pedida por otros Cuerpos de Bomberos, fuera del área que atiende el CBPM.",
    "10-13": "Artefacto explosivo, sobre sospechoso o acto terrorista, en colaboración con los organismos competentes.",
    "10-14": "Llamado que no es una emergencia, destinado al entrenamiento o a demostraciones.",
    "11-4": "Se usa cada vez que entra en servicio un operador u operador asistente, seguida de su clave.",
    "12-6": "El material en el lugar es suficiente: las piezas en tránsito ya no son necesarias. También se usa al cambiar de clave si no se requiere más material.",
    "12-7": "El material en el lugar basta, pero el OBAC quiere al personal de la pieza que viene; esa pieza puede quedar 6-8 en el lugar.",
    "12-10": "Se dice «12-10 B-1», no «12-10 para B-1». Si una máquina no tiene conductor, el OBAC indica 12-10."
  };

  // Detalle de los grados del 9-0 (POE 5.4 y 5.6)
  usos["9-0 G1"] = "Grado 1: guardia preventiva de X bomberos por compañía.";
  usos["9-0 G2"] = "Grado 2: acuartelamiento de guardia nocturna desde las… hrs.";
  usos["9-0 G3"] = "Grado 3: acuartelamiento general inmediato.";

  // Nomenclatura del material mayor (POE 5.3)
  var material = [
    ["B", "Bomba de primera intervención: carro bomba principal de las compañías de agua."],
    ["BX", "Bomba de segunda intervención: carro bomba distinto de la máquina principal."],
    ["BF", "Bomba forestal: equipada para emergencias de interfaz urbano forestal."],
    ["BR", "Bomba de reemplazo: la dispone la Comandancia para reemplazar carros fuera de servicio."],
    ["H", "Carro hazmat o matpel: emergencias con materiales peligrosos."],
    ["HX", "Carro hazmat de segunda intervención: función de apoyo en materiales peligrosos."],
    ["J", "Carro de transporte de personal."],
    ["K", "Vehículo de comandancia: transporte de comandantes y trámites administrativos."],
    ["M", "Mecánica telescópica: escala recta de más de 15 metros para accesos y evacuación."],
    ["Q", "Carro portaescalas: máquina principal de las compañías de escalas."],
    ["QR", "Carro portaescalas y rescate: equipamiento para incendios, escalas y rescate."],
    ["R", "Carro de rescate: rescate vehicular en condiciones normales."],
    ["RX", "Carro de rescate pesado: cualquier tipo de rescate, aun en condiciones adversas."],
    ["Z", "Carro cisterna o aljibe: transporta gran cantidad de agua, sin bomba incorporada."],
    ["X", "Carro de comando y comunicaciones: puesto de comando y puesto móvil de comunicaciones."],
    ["L", "Carro de logística: materiales menores de apoyo."],
    ["E", "Carro de intervención multipropósito: primera respuesta con fuego, gas y rescate vehicular."],
    ["S", "Ambulancia institucional del Cuerpo."]
  ];

  // Claves del personal (POE 5.3)
  var personal = [
    ["1", "Comandante"], ["2", "2° Comandante"], ["3", "3er Comandante"], ["4", "Capitán de Guardia"],
    ["6", "Superintendente"], ["7", "Vicesuperintendente"], ["8", "Secretario General"],
    ["9", "Tesorero General"], ["10", "Intendente General"],
    ["11", "Jefe de Departamentos Técnico"], ["12", "Inspector Médico"], ["13", "Inspector de Capacitación"],
    ["14", "Inspector de Prevención de Riesgos"], ["15", "Inspector de Planificación de Operaciones de Rescate"],
    ["16", "Inspector de Investigación de Incendios"], ["17", "Inspector de Operaciones Hazmat"],
    ["18", "Inspector de Alarmas y Telecomunicaciones"], ["19", "Inspector de Operaciones de Incendio"],
    ["20", "Inspector de Material Mayor"], ["21", "Inspector de Material Menor"],
    ["22", "Inspector de Comunicaciones y Relaciones Públicas"], ["23", "Departamento de Secretaría de Comandancia"],
    ["25", "1er Ayudante General"], ["26", "2° Ayudante General"], ["27", "3er Ayudante General"],
    ["31 al 38", "Operadores de Central"],
    ["41 al 49", "Capitanes de la 1ª a la 9ª Compañía (41 es la 1ª, 49 la 9ª)"],
    ["71 al 79", "Directores de la 1ª a la 9ª Compañía (71 es la 1ª, 79 la 9ª)"],
    ["N01", "Teniente 1° (N es el número de la compañía: 101, 201… 901)"],
    ["N02", "Teniente 2° (102, 202… 902)"],
    ["N03", "Teniente 3° (103, 203… 903)"],
    ["N04", "Teniente 4° (104, 204… 904)"],
    ["N05", "Jefe de Máquinas (105, 205… 905)"],
    ["N05-A/B/C", "Maquinista 1°, 2° y 3° (105-A, 105-B, 105-C…)"],
    ["N06", "Ayudante (106, 206… 906)"],
    ["N06 A/B", "Ayudante 2° y 3° (106 A, 106 B…)"],
    ["61 al 69", "Conductor rentado de la 1ª a la 9ª Compañía"],
    ["61-A al 69-A", "2° conductor rentado o conductor de reemplazo de cada compañía"],
    ["60", "Conductor rentado de Comandancia (60-A y 60-B: 2° y 3er conductor)"],
    ["Clave-B", "Bombero en canje: su clave seguida de B"]
  ];

  window.CBPM = { cats: cats, cuart: cuart, usos: usos, material: material, personal: personal };
})();
