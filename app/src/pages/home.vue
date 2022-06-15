<template>
  <div class="vp-home">
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Nr</div>
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-2">Status</div>
      </div>
      <div
        v-for="(server, index) in servers"
        class="row grid grid-cols-12 font-bold px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-2">{{ index }}</div>
        <div class="col col-span-12 md:col-span-4">{{ server.name }}</div>
        <div class="col col-span-12 md:col-span-4">{{ server.link }}</div>
        <div class="col col-span-12 md:col-span-2">
          <span v-if="server.status">
            <fa icon="circle-check" class="fa-2x"
          /></span>
          <span v-else><fa icon="circle-arrow-down" class="fa-2x" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  mounted() {
    const that = this;
    setInterval(function(){
      that.check()
    }, 1000);
  },
  methods: {
    check: function () {
      const that = this;
      for (let i = 0; i < this.servers.length; i++) {
        fetch('https://' + this.servers[i].link)
          .then(function (response) {
            if (response.status == 200) {
              that.servers[i].status = 1;
            } else {
              that.servers[i].status = 0;
            }
          })
          .catch(function () {
            that.servers[i].status = 0;
          });
      }
    },
  },
  data() {
    return {
      servers: [
        {
          name: "Holländer Diele",
          status: 1,
          link: "www.hollander-diele.de",
        },
        {
          name: "Mauleshagen Baustoffe",
          status: 1,
          link: "www.mauelshagen-baustoffe.de",
        },
        {
          name: "Olaf-Linscheid",
          status: 1,
          link: "www.olaf-linscheid.de",
        },
        {
          name: "Guido Richardts",
          status: 1,
          link: "www.guido-richardts.de",
        },
        {
          name: "Come In",
          status: 1,
          link: "www.come-in.rocks",
        },
        {
          name: "Klotz Imbiss",
          status: 1,
          link: "www.klotz-imbiss.de",
        },
        {
          name: "Kerntopp.shop",
          status: 1,
          link: "www.kerntopp.shop",
        },
        {
          name: "Selammmh Imbiss",
          status: 1,
          link: "www.selammmh-imbiss.de",
        },
         {
          name: "Pützchens Getränkecenter",
          status: 1,
          link: "www.pützchens-getränkecenter.de",
        },
      ],
    };
  },
};
</script>
