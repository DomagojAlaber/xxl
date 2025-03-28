<script lang="ts">
    import prices from '$lib/data/cjenik.json';
  </script>
  
  <section class="bg-white px-4 py-16 sm:px-6 md:px-20 lg:px-[110px]">
    <div class="mx-auto max-w-6xl">
      <h1 class="text-center text-3xl font-bold mb-6 md:text-4xl">
        Naše usluge po vašoj mjeri
      </h1>
      <p class="text-center text-gray-700 mb-10">
        Dobrodošli u naš katalog usluga XXL krojačkog obrta. Ovdje ćete pronaći detaljan pregled naših najtraženijih usluga. Bilo da trebate odjeću za posebne prilike, svakodnevne komade ili prepravke koje će vašoj omiljenoj odjeći dati novi život – mi smo tu za vas.
      </p>
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-gray-600 font-medium">Naziv Usluge</th>
              <th class="px-6 py-3 text-left text-gray-600 font-medium">Cijena (EUR)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            {#each prices as item}
              <tr class="hover:bg-gray-50 transition-colors duration-200">
                <td class="px-6 py-4">{item.name}</td>
                <td class="px-6 py-4">
                  {item.price ? item.price + " €" : "Po dogovoru"}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  