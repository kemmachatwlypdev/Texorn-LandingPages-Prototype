<template>
  <div id="inputForms">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br />
    <v-container class="" style="height: 100%;">
      <v-row no-gutters >
        <v-col cols="12" md="4">
          <v-card class="pa-2" style=" height: 100%;" outlined tile> <!-- background color + size 100% -->
            <h1 class="text-start">Instructions</h1>
            <p class="text-start">
              1. The goal of this challenge is to create a workflow that will
              input data from a spreadsheet into the form fields on the screen.
              <br><br>
              2. Beware! The fields will change position on the screen after
              every submission throughout 10 rounds thus the workflow must
              correctly identify where each spreadsheet record must be typed
              every time.
               <br><br>
              3. The actual countdown of the challenge will begin
              once you click the Start button until then you may submit the form
              as many times as you wish without receiving penalties. Good luck!
               <br><br>
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" >
          <v-card class="pa-2 text-center" style="height: 100%;" outlined tile>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:10"
                >
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 7,
                    regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    :counter="7"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="select"
                  rules="required"
                >
                  <v-select
                    v-model="select"
                    :items="items"
                    :error-messages="errors"
                    label="Select"
                    data-vv-name="select"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                  name="checkbox"
                >
                  <v-checkbox
                    v-model="checkbox"
                    :error-messages="errors"
                    value="1"
                    label="Option"
                    type="checkbox"
                    required
                  ></v-checkbox>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                  submit
                </v-btn>
                <v-btn @click="clear">
                  clear
                </v-btn>
              </form>
              <br /><br /><br />
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="footerInput"><foote /></div>
  </div>
</template>

<script>
import navigation from "@/components/Blog/NavigationBlogs.vue";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import foote from "@/components/Footer";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    navigation,
    foote,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
#footerInput{
            position: fixed;
            bottom: 0;
            width: 100%;
}
</style>