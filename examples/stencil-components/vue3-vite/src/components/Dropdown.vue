<template>
  <div>
    <ifx-dropdown ref="dropdownRef"
      :disabled="dropdownConfig.disabled"
      :close-on-menu-click="true"
      :close-on-outside-click="false"
    >
      <ifx-dropdown-trigger-button
        icon="c-info-16"
        :color="dropdownConfig.color"
        :variant="dropdownConfig.variant"
        :size="dropdownConfig.size"
        :type="dropdownConfig.type"
      >
        Dropdown Button
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu>
        <ifx-dropdown-item v-for="item in dropdownConfig.items" icon="c-info-16" :key="item.text" :href="item.href">
          {{ item.text }}
        </ifx-dropdown-item>
      </ifx-dropdown-menu>
    </ifx-dropdown>
    <ifx-button @click="toggleDropdown" style="margin-left:0.2em">Toggle Dropdown</ifx-button>

    <!-- Dropdown configuration form -->
    <h2>Configuration</h2>
    <form @submit.prevent>

    <ifx-dropdown>
        <ifx-dropdown-trigger-button>Color: {{ dropdownConfig.color }}</ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item @click="dropdownConfig.color = 'primary'">primary</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.color = 'secondary'">secondary</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.color = 'success'">success</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.color = 'danger'">danger</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.color = 'warning'">warning</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>

      <ifx-dropdown>
        <ifx-dropdown-trigger-button>Variant: {{ dropdownConfig.variant }}</ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item @click="dropdownConfig.variant = 'solid'">solid</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.variant = 'outline'">outline</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.variant = 'outline-text'">outline-text</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
      
      <!-- Size Selector -->
      <ifx-dropdown>
        <ifx-dropdown-trigger-button>Size: {{ dropdownConfig.size }}</ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item @click="dropdownConfig.size = 's'">s</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.size = 'm'">m</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>

      <!-- Disabled Selector -->
      <ifx-dropdown>
        <ifx-dropdown-trigger-button>Disabled: {{ dropdownConfig.disabled }}</ifx-dropdown-trigger-button>
        <ifx-dropdown-menu>
          <ifx-dropdown-item @click="dropdownConfig.disabled = true">true</ifx-dropdown-item>
          <ifx-dropdown-item @click="dropdownConfig.disabled = false">false</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </form>
    <h3>Items</h3>
    <div v-for="(item, index) in dropdownConfig.items" :key="index">
      <label>Text: <input v-model="item.text" /></label>
      <label>Href: <input v-model="item.href" /></label>
      <button @click="removeItem(index)">Remove Item</button>
    </div>
    <ifx-button @click="addItem">Add Item</ifx-button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const dropdownRef = ref(null);

onMounted(() => {
  dropdownRef.value.addEventListener('open', () => {
    console.log('Dropdown opened');
  });

  dropdownRef.value.addEventListener('close', () => {
    console.log('Dropdown closed');
  });
});

onUnmounted(() => {
  dropdownRef.value.removeEventListener('open', () => {});
  dropdownRef.value.removeEventListener('close', () => {});
});

const toggleDropdown = async () => {
  console.log(await dropdownRef.value.isOpen())
  if (await dropdownRef.value.isOpen()) {
    await dropdownRef.value.closeDropdown();
  } else {
    await dropdownRef.value.openDropdown();
  }
};

// Add dropdown configurations here
const dropdownConfig = reactive({
  icon: 'icon-name',
  color: 'primary',
  variant: 'solid',
  size: 'm',
  disabled: false,
  type: 'button',
  items: [
    { href: '', text: 'no url' },
    { href: 'http://example.com', text: 'Dropdown Item 2' }
  ]
});

const addItem = () => {
  dropdownConfig.items.push({ href: '', text: '' });
};

const removeItem = (index) => {
  dropdownConfig.items.splice(index, 1);
};
</script>