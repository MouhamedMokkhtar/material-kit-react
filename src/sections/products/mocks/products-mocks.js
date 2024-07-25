export const productsMocks = 
  [
    {
      id: 12,
      product_id: "79",
      type: "Test",
      accept_promo_code: true,
      lookup_params: {
        client_cin: "^[A-Z]{2}[0-9]{6}$",
        client_passport: "^[A-Z0-9]{8,9}$",
        client_code: "^[A-Z0-9]{10}$"
      },
      combinations_list: [],
      free_entry: true,
      accepted_amounts_list: [],
      details_example: {
        lookup_values: {
          client_cin: "^[A-Z]{2}[0-9]{6}$",
          client_passport: "^[A-Z0-9]{8,9}$",
          client_code: "^[A-Z0-9]{10}$"
        },
        details: {
          amount_currency: "^[A-Z]{3}$",
          amount_to_pay: "^[0-9]{4}$",
          expiry_date: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
          status: "^available$",
          full_name: "^[a-zA-Z ]{6}$",
          client_phone_number: "^\\d{8}$",
          tax_amount: "^[0-9]{3}$",
          reference: "^[0-9]{6}$",
          reservation_id: "^[0-9]{6}$"
        }
      },
      reserve_delay: 900,
      is_available: false
    },
    {
      id: 11,
      product_id: "76",
      type: "Test",
      accept_promo_code: true,
      lookup_params: {
        client_cin: "^[A-Z]{2}[0-9]{6}$",
        client_passport: "^[A-Z0-9]{8,9}$",
        client_code: "^[A-Z0-9]{10}$"
      },
      combinations_list: [],
      free_entry: true,
      accepted_amounts_list: [],
      details_example: {
        lookup_values: {
          client_cin: "^[A-Z]{2}[0-9]{6}$",
          client_passport: "^[A-Z0-9]{8,9}$",
          client_code: "^[A-Z0-9]{10}$"
        },
        details: {
          amount_currency: "^[A-Z]{3}$",
          amount_to_pay: "^[0-9]{4}$",
          expiry_date: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
          status: "^available$",
          full_name: "^[a-zA-Z ]{6}$",
          client_phone_number: "^\\d{8}$",
          tax_amount: "^[0-9]{3}$",
          reference: "^[0-9]{6}$",
          reservation_id: "^[0-9]{6}$"
        }
      },
      reserve_delay: 900,
      is_available: true
    },
    {
      id: 10,
      product_id: "77",
      type: "Test",
      accept_promo_code: true,
      lookup_params: {
        client_cin: "^[A-Z]{2}[0-9]{6}$",
        client_passport: "^[A-Z0-9]{8,9}$",
        client_code: "^[A-Z0-9]{10}$"
      },
      combinations_list: [],
      free_entry: true,
      accepted_amounts_list: [],
      details_example: {
        lookup_values: {
          client_cin: "^[A-Z]{2}[0-9]{6}$",
          client_passport: "^[A-Z0-9]{8,9}$",
          client_code: "^[A-Z0-9]{10}$"
        },
        details: {
          amount_currency: "^[A-Z]{3}$",
          amount_to_pay: "^[0-9]{4}$",
          expiry_date: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
          status: "^available$",
          full_name: "^[a-zA-Z ]{6}$",
          client_phone_number: "^\\d{8}$",
          tax_amount: "^[0-9]{3}$",
          reference: "^[0-9]{6}$",
          reservation_id: "^[0-9]{6}$"
        }
      },
      reserve_delay: 900,
      is_available: true
    },
    {
      id: 9,
      product_id: "46",
      type: "Test",
      accept_promo_code: true,
      lookup_params: {
        client_cin: "^[A-Z]{2}[0-9]{6}$",
        client_passport: "^[A-Z0-9]{8,9}$",
        client_code: "^[A-Z0-9]{10}$"
      },
      combinations_list: [],
      free_entry: true,
      accepted_amounts_list: [],
      details_example: {
        lookup_values: {
          client_cin: "^[A-Z]{2}[0-9]{6}$",
          client_passport: "^[A-Z0-9]{8,9}$",
          client_code: "^[A-Z0-9]{10}$"
        },
        details: {
          amount_currency: "^[A-Z]{3}$",
          amount_to_pay: "^[0-9]{4}$",
          expiry_date: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
          status: "^available$",
          full_name: "^[a-zA-Z ]{6}$",
          client_phone_number: "^\\d{8}$",
          tax_amount: "^[0-9]{3}$",
          reference: "^[0-9]{6}$",
          reservation_id: "^[0-9]{6}$"
        }
      },
      reserve_delay: 900,
      is_available: true
    },
    {
      id: 7,
      product_id: "44",
      type: "Test",
      accept_promo_code: true,
      lookup_params: {
        client_cin: "^[A-Z]{2}[0-9]{6}$",
        client_passport: "^[A-Z0-9]{8,9}$",
        client_code: "^[A-Z0-9]{10}$"
      },
      combinations_list: [
        [
          "client_code",
          "client_cin"
        ],
        [
          "client_code",
          "client_passport"
        ]
      ],
      free_entry: true,
      accepted_amounts_list: [],
      details_example: {
        lookup_values: {
          client_cin: "^[A-Z]{2}[0-9]{6}$",
          client_passport: "^[A-Z0-9]{8,9}$",
          client_code: "^[A-Z0-9]{10}$"
        },
        details: {
          amount_currency: "^[A-Z]{3}$",
          amount_to_pay: "^[0-9]{4}$",
          expiry_date: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
          status: "^available$",
          full_name: "^[a-zA-Z ]{6}$",
          client_phone_number: "^\\d{8}$",
          tax_amount: "^[0-9]{3}$",
          reference: "^[0-9]{6}$",
          reservation_id: "^[0-9]{6}$"
        }
      },
      reserve_delay: 900,
      is_available: true
    }
  ]