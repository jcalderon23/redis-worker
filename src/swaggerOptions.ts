export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentación",
      version: "1.0.0",
      description: "Proyecto Aportes en Linea - Nómina Electrónica",
    },
    servers: [
      { url: "http://localhost:3007/pila", description: "Development" },
      {
        url: "http://qa-ael-api-nomina-pila.ccxc.co/pila",
        description: "QA",
      },
    ],
    components: {
      responses: {
        NotFound: {
          description: "The specified resource was not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        Unauthorized: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        Error: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["password", "token"],
          properties: {
            password: {
              type: "string",
              example: "lBhShgD7oNyD7jqnkVJmHuqt9VMr",
            },
            token: {
              type: "string",
              example:
                "NHz-lBhShgD7oNyD7jqnkVJmHuqt9VMrkVssPzY8jrbC0MUKL_t4ByOYZ8CvOrxj0",
            },
          },
        },
        ContributorReferenceBase: {
          type: "object",
          properties: {
            TipoDocumento: {
              type: "string",
              example: "CC",
            },
            NumeroDocumento: {
              type: "string",
              example: "1082129772",
            },
            PrimerNombre: {
              type: "string",
              example: "Pepito",
            },
            SegundoNombre: {
              type: "string",
              example: "Juan",
            },
            PrimerApellido: {
              type: "string",
              example: "Perez",
            },
            SegundoApellido: {
              type: "string",
              example: "Esteban",
            },
            CodigoEps: {
              type: "string",
              example: "EPS005",
            },
            NombreEps: {
              type: "string",
              example: "SANITAS",
            },
            FechaAfiliacionEps: {
              type: "string",
              format: "date",
              example: "2018-02-01",
            },
            CertificadoEps: {
              type: "boolean",
              example: true,
            },
            ValorUPC: {
              type: "number",
              example: 0,
            },
            CodigoAfp: {
              type: "string",
              example: "",
            },
            NombreAfp: {
              type: "string",
              example: "",
            },
            FechaAfiliacionAfp: {
              type: "string",
              format: "date",
              example: "",
            },
            CertificadoAfp: {
              type: "boolean",
              example: false,
            },
            EsPensionado: {
              type: "boolean",
              example: false,
            },
            EnTramitePension: {
              type: "boolean",
              example: false,
            },
            TipoPension: {
              type: "string",
              example: "",
            },
          },
        },
        ConsultContributor: {
          type: "object",
          properties: {
            TipoDocumento: {
              type: "string",
              example: "CC",
            },
            NumeroDocumento: {
              type: "string",
              example: "1082129772",
            },
            PrimerNombre: {
              type: "string",
              example: "Pepito",
            },
            SegundoNombre: {
              type: "string",
              example: "Juan",
            },
            PrimerApellido: {
              type: "string",
              example: "Perez",
            },
            SegundoApellido: {
              type: "string",
              example: "Esteban",
            },
            CorreoElectronico: {
              type: "string",
              example: "camezquita@aportesenlinea.com",
            },
            Celular: {
              type: "string",
              example: "3102004423",
            },
            CodigoSucursal: {
              type: "string",
              example: "a1",
            },
            NombreSucursal: {
              type: "string",
              example: "Principal",
            },
            CodigoCentroTrabajo: {
              type: "string",
              example: "01",
            },
            CentroTrabajo: {
              type: "string",
              example: "Centro trabajo 01",
            },
            TipoCotizante: {
              type: "string",
              example: "01",
            },
            NombreTipoCotizante: {
              type: "string",
              example: "Dependiente",
            },
            SubTipoCotizante: {
              type: "string",
              example: "02",
            },
            NombreSubTipoCotizante: {
              type: "string",
              example: "Dependiente",
            },
            ExoneradoParafiscalesYSalud: {
              type: "boolean",
              example: false,
            },
            ColombianoEnElExterior: {
              type: "boolean",
              example: false,
            },
            FechaResidenciaExterior: {
              type: "string",
              format: "date",
              example: false,
            },
            EPS: {
              type: "string",
              example: "EPS010",
            },
            NombreEPS: {
              type: "string",
              example: "EPS SURA (ANTES SUSALUD)",
            },
            AFP: {
              type: "string",
              example: "231001",
            },
            NombreAFP: {
              type: "string",
              example: "Colfondos",
            },
            CCF: {
              type: "string",
              example: "CCF06",
            },
            NombreCCF: {
              type: "string",
              example: "COMBARRANQUILLA",
            },
            ARL: {
              type: "string",
              example: "EPS015",
            },
            NombreARL: {
              type: "string",
              example: "COLPATRIA",
            },
            TarifaAltoRiesgoPension: {
              type: "string",
              example: "",
            },
            ValorUPCSalud: {
              type: "string",
              example: "",
            },
            FechaIngreso: {
              type: "string",
              format: "date",
              example: "2018-02-01",
            },
            FechaRetiro: {
              type: "string",
              format: "date",
              example: "2019-02-01",
            },
            Salario: {
              type: "string",
              example: "13700000",
            },
            SalarioIntegral: {
              type: "boolean",
              example: true,
            },
            TipoSalario: {
              type: "string",
              example: "V",
            },
            GrupoPoblacional: {
              type: "string",
              example: "",
            },
            SenIcbf: {
              type: "boolean",
              example: true,
            },
          },
        },
        CreateContributor: {
          type: "object",
          properties: {
            data: {
              type: "array",
              example:
                "Se registro con éxito el cotizante con tipo de identificación: CC con numero: 1200000005",
            },
            mensajes: {
              type: "array",
              example: [],
            },
          },
        },
        UpdateContributor: {
          type: "object",
          properties: {
            data: {
              type: "array",
              example:
                "Se actualizó con éxito el cotizante con tipo de identificación: CC con numero: 1200000005",
            },
            mensajes: {
              type: "array",
              example: [],
            },
          },
        },
        DeleteContributor: {
          type: "object",
          properties: {
            data: {
              type: "array",
              example: "Se eliminó con éxito el cotizante. CC 114085760",
            },
            mensajes: {
              type: "array",
              example: [],
            },
          },
        },
        Novelties: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  Aportante: {
                    type: "object",
                    properties: {
                      TipoIdAportante: {
                        type: "string",
                        example: "NI",
                      },
                      NumeroIdAportante: {
                        type: "string",
                        example: "900313079",
                      },
                      SucursalPrincipal: {
                        type: "string",
                        example: "001",
                      },
                    },
                  },
                  Novedades: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        TipoNovedad: {
                          type: "string",
                          example: "RET",
                        },
                        SubTipoNovedad: {
                          type: "string",
                          example: "X",
                        },
                        Periodo: {
                          type: "string",
                          example: "2022-02",
                        },
                        FechaFinal: {
                          type: "string",
                          example: "2023-02-22",
                        },
                        TipodeDocumento: {
                          type: "string",
                          example: "CC",
                        },
                        NumerodeDocumento: {
                          type: "string",
                          example: "1007859211",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        ConsultTaxpayer: {
          type: "object",
          properties: {
            id: {
              type: "number",
              example: 645213,
            },
            tipo_id: {
              type: "number",
              example: 3,
            },
            no_id: {
              type: "string",
              example: "900123459",
            },
            dv: {
              type: "string",
              example: "1",
            },
            razon_social: {
              type: "string",
              example: "CCXC QA",
            },
            actividad_economica: {
              type: "number",
              example: 945,
            },
            representante: {
              type: "number",
              example: 645258,
            },
            clave: {
              type: "string",
              example: "05256705",
            },
            dia_pago: {
              type: "number",
              example: 10,
            },
            arp: {
              type: "number",
              example: 9,
            },
            clase_empleador: {
              type: "number",
              example: 1,
            },
            presentacion: {
              type: "number",
              example: 2,
            },
            id_mafa: {
              type: "stnumberring",
              example: 0,
            },
          },
        },
        PilaPayments: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  NumeroPlanilla: {
                    type: "string",
                    example: "112312312",
                  },
                  PeriodoPension: {
                    type: "string",
                    example: "2021-02",
                  },
                  ValorPagar: {
                    type: "string",
                    example: "1000000",
                  },
                  FechaLimitePago: {
                    type: "string",
                    example: "2021-02-22",
                  },
                  FechaRealPago: {
                    type: "string",
                    example: "2021-02-22",
                  },
                  EstadoPlanilla: {
                    type: "string",
                    example: "DISPONIBLE PARA PAGO",
                  },
                  URLPago: {
                    type: "string",
                    example: "https://www.google.com",
                  },
                },
              },
            },
            mensajes: {
              type: "array",
              example: [],
            },
          },
        },
        Manager: {
          type: "object",
          properties: {
            document_type_id: {
              type: "uuid",
              example: "1",
            },
            document_number: {
              type: "string",
              example: "1000000000",
            },
            first_name: {
              type: "string",
              example: "Juan",
            },
            second_name: {
              type: "string",
              example: "Pablo",
            },
            first_surname: {
              type: "string",
              example: "Perez",
            },
            second_surname: {
              type: "string",
              example: "Gomez",
            },
          },
        },
        WorkPlace: {
          type: "object",
          properties: {
            code: {
              type: "string",
              example: "001",
            },
            name: {
              type: "string",
              example: "Bogota",
            },
            arl_rate: {
              type: "number",
              example: 0.00522,
            },
            economic_activity: {
              type: "string",
              example: "Example",
            },
          },
        },
        UserPila: {
          type: "object",
          properties: {
            document_type_id: {
              type: "uuid",
              example: "1",
            },
            document_number: {
              type: "string",
              example: "1000000000",
            },
            first_name: {
              type: "string",
              example: "Juan",
            },
            second_name: {
              type: "string",
              example: "Pablo",
            },
            first_surname: {
              type: "string",
              example: "Perez",
            },
            second_surname: {
              type: "string",
              example: "Gomez",
            },
            email: {
              type: "string",
              example: "test@gmail.com",
            },
            user_name: {
              type: "string",
              example: "test-pila",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            nameService: {
              type: "string",
            },
            message: {
              type: "string",
            },
          },
          required: ["nameService", "message"],
        },
      },
    },
  },
  apis: ["./src/entities/*.ts", "./src/controllers/*.ts", "./src/routes/*.ts"],
};
