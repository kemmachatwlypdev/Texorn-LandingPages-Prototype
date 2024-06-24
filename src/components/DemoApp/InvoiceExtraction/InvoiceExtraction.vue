<template>
  <div id="invoiceextraction">
    <div>
      <navigation :color="color" :flat="flat" />
    </div>
    <br /><br /><br />
    <v-container>
      <v-row no-gutters>
        <v-col cols="6" sm="6" md="4">
          <v-card class="pa-2" stlye="background-color: #119DA4" outlined tile>
            <!-- background color + size 100% -->
            <h1 class="text-start">Instructions</h1>
            <ol class="instruction">
              <li>
                The goal of this challenge is to create a workflow that will
                read every table row and download the respective invoices.
              </li>
              <br />
              <li>
                From the invoices, you will have to extract the Invoice
                Number,Invoice Date, Company Name and Total Due.
              </li>
              <br />
              <li>
                You will have to build and upload a CSV file with the data
                extracted from each invoice, the ID and Due Date from the table,
                only for the invoices for which the Due Date has passed or is
                today.
              </li>
              <br />
              <li>
                The actual countdown of the challenge will begin once you click
                the Start button and will end once the CSV file is uploaded;
                until then, you may play around with the table on the right
                without receiving penalties.
              </li>
              <br />
              <li>
                Below you will find an example CSV file in order to see the
                required format for the end result and two sample invoices. The
                formats of the invoices will be exactly as in the samples and
                they will not change. The challenge expects the uploaded CSV to
                be in the exact same format as the example CSV, including the
                formatting of the cells, and the rows should be in the same
                order as they appear in the table. Any difference will result in
                a failed challenge.
              </li>
              <br />
              Good luck!
            </ol>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2 text-center" outlined tile>
            <v-data-table
              dense
              :headers="headers"
              :items="infogarphic"
              item-key="name"
              class="infogarphic"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="footerInput"><foote /></div>
  </div>
</template>

<script>
import navigation from "@/components/Blog/NavigationBlogs.vue";
import foote from "@/components/Footer";

export default {
  components: {
    navigation,
    foote,
  },
  data: () => ({
    infogarphic: [
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Ice cream sandwich",
      },
      {
        name: "Eclair",
      },
      {
        name: "Cupcake",
      },
      {
        name: "Gingerbread",
      },
      {
        name: "Jelly bean",
      },
      {
        name: "Lollipop",
      },
      {
        name: "Honeycomb",
      },
      {
        name: "Donut",
      },
      {
        name: "KitKat",
      },
    ],
    headers: [
      {
        text: "No.",
        value: "name",
      },
      { text: "FileName" },
      { text: "Date" },
      { text: "Download" },
    ],
  }),
};
</script>

<style>
.infogarphic {
  border: 1px solid;
  padding: 0%;
  display: block;
}
.instruction{
  font-size: medium;
}
#invoiceextraction {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background: url("~@/assets/img/bgMain.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#footerInput {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
