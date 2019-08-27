# respuestacomparaonline
Respuesta al test de Ingeniería de Software de comparaonline.

##Uso
Para ejecutar el código y ver el despliegue en consola del proceso de actualización de precios
```bash
node index.js
```

Para generar el archivo de texto y compararlo contra el original entregado
```bash
node test/index.js
```

##Nuevo Producto
Para agregar un nuevo producto es necesario agregar la clase respectiva en el directorio **/class** extendiendo la clase base **Product**.
Luego dentro de la nueva clase se definen el comportamiento particular del producto dentro del metodo **updatePrice**



##Problemas encontrados
revisando el texto del resultado esperado encontré que :
- No hay ningún alcance en la definición a que el dato **sellIn** un producto de tipo **Mega Coverage**  nunca varia.
- El resultado de **superFullCoverage** en el archivo de texto al parecer tiene un problema. 
    Me parece que las condiciones no se están evaluando correctamente. Según el texto se deben aplicar valores especificios cuando el valor es menor o igual a 10 y menor o igual a 5. El resultado me parece que esta resolviendo  menor a 10 y menor a 5.