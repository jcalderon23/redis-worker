## Recordatorio
El nombre del **BRANCH** debe cumplir con las convenciones establecidas 
por ejemplo: **#NumeroDelIssueRedmine/nombre-modulo-descripcion**   

La descripción del **COMMIT** debe ser concisa y especificar la funcionalidad del modulo en la que se esta trabajando

**Por Ejemplo:**

          - git commit -m 'Filtro búsqueda por nombre agregada en el modulo X'
          - git commit -m "Arreglo falla en el login"
**Variables**

          - Las constantes deben ser en mayúsculas, si hay varias palabras estas son separadas por raya baja.
         SOY_UNA_CONSTANTE             ✓
         EstoNoEsUnaConstante          x
         estoTampocoEsUnaConstante     x
**Entidades**

          - Los nombres de las clases de las entidades deben ser nombradas aplicando PascalCase. Veamos algunos ejemplos:
         User             ✓
         OrderDetail      ✓
         customer         X
         DetalleDeFactura X
         borrowed-book    X 
## Redmine

No. Issue | Path | Description
--- | --- | --- |
<a target='_blank' href='http://redmine.ccxc.co/issues/1234'>#issue </a> | <a href='http://ael-api-nomina-service/end-point-expample'>http://ael-api-nomina-service/end-point-example</a> | example: short description.

## Parámetros de aceptación
Agregar una **X** en la casilla en donde se verifica el cumplimiento de cada uno de las pautas para desarrollo de backend, en caso de que no aplique simplemente agrege un **N/A** en la casilla

| | Si | No
--- | --- | --- |
|1.-  Antes de subir un PR verificar si se realizo un `git pull origin develop --rebase `| |
|2.-  Los métodos, variables, constantes y clases no debe contener números o caracteres especiales.| | 
|3.- Las rutas (Endpoint) debe estar documentada con el standar de swagger| |

```nodejs
  Ejemplo:
    /**
     * @swagger
     * /END-POINT
     *   post:
     *     tags: [Payslip]
     *     responses:
     *      200:
     *        description: Short descrition at the route.
     *        content:
     *          application/json:
     *            schema:
     *              type: array | string |  bool ....
     *              items:
     *                $ref: '#/components/schemas/Payslip'
     *      400:
     *        $ref: '#/components/responses/BadRequest'
     *      401:
     *        $ref: '#/components/responses/Unauthorized'
     *      404:
     *        $ref: '#/components/responses/NotFound'
     */
   app
      .route(`${urls.base}/END-POINT`)
      .post(this.nameController.getData);
```

| | Si | No
--- | --- | --- |
|4.- Las métodos de cada **Controller** debe estar documentada con el standar de swagger, describiendo los datos de entrada, salida, tipos de datos, etc | |

```nodejs
  Ejemplo:
     /**
   * @swagger
   * /END-POINT
   *   post:
   *    tags: [Payslip]
   *    description: Short descrition at the method.
   *    requestBody:
   *      description: Create absence.
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/Payslip'
   */
  public getData = async (req: Request, res: Response) => {
```

| | Si | No
--- | --- | --- |
|5.- El nombre del los scripts debe contener el siguiente standa: **nombreEntidad.tipo.ts** aplicando camelCase y ubicado en el path correspondiente en cuanto a estructura del proyecto| |
|6.- Los métodos de cada **Controller** debe tener su propio método test,  el archivo test debe estar en el suguiente path: **.../src/controllers** con la siguiente convención para el nombre del archivo test, ejemplo: **payslip.controller.ts** | |
|7.- Los métodos de cada **Service** debe tener su propio método test,  el archivo test debe estar en la suguiente ubicación: **.../src/services** con la siguiente convención para el nombre del archivo test, ejemplo: **payslip.service.ts** | |
|8.- Los métodos de cada **Helper** debe tener su propio método test,  el archivo test debe estar en la suguiente ubicación: **.../src/helpers** con la siguiente convención para el nombre del archivo test, ejemplo: **calculation.helper.ts** | |
|9.- Los métodos, clases deben estar debibadente tipados | |
|10.- Las **Entidades** deben estar documentada con el standar de swagger, describiendo los campos que componen la entidad | |

```nodejs
Ejemplo:
 /**
 * @swagger
 *  components:
 *    schemas:
 *      Payslip:
 *        type: object
 *        properties:
 *          id:
 *            type: uuid
 *            example: 3898b2a6-4d13-4658-9bd1-1091cc8ee06a
 *          year_period_id:
 *            type: uuid
 *            example: 6668e577-1d85-44e6-9dce-f6377c1f17c6
 *          payslip_type_id:
 *            type: uuid
 *            example: 6668e577-1d85-44e6-9dce-f6377c1f17c6
 *          start_date:
 *            type: date
 *            example: 2020-01-01
 * ...
@Entity()
export class Payslip extends BaseEntity {
```
| | Si | No
--- | --- | --- |
|11.-Verificar que no se este utilizando Magic Numbers para arreglos ejemplo: valueUser[0] en caso del 0 se debe utilizar una constante o destructurar por ejemplo:  **valueUser[0]** en caso del **0** se debe utilizar una constante o destructurar por ejemplo:    <br /> - `const username = valueUser[0]`<br /> - `const { username } = valueUser[0]`  | |
|12.-  Al actualizar una Entidad se debe ajustar el Factory "**nombreEntidad.factory.ts**"  relacionado | | 
|13.-  El Coverage debe ser susperior al 80% de la efectividad de los test "npm run test" | | 
|14.-  Se debe compilar el proyecto antes de enviar el Pull Request | | 
|15.-  Los servicios no pueden hacer consultas a otros servicios en los test, se debe usar mocks para emular la consulta | |
