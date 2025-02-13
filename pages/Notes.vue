<!-- <script lang="ts" setup>
import { ref, onMounted } from "vue";
import { sql } from "kysely";
import Database, { sqlite } from "../database"; // Fixed path
import Migrator from "../database/BrowserMigrator";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonInput,
  IonButton,
} from "@ionic/vue";

const note = ref("");
const notes = ref<{ id: number; content: string }[]>([]);

onMounted(async () => {
  await Migrator.migrate();
  loadNotes();
  const db = await sqlite.retrieveConnection("nuxt", false);
});

const loadNotes = async () => {
  notes.value = await Database.selectFrom("notes").selectAll().execute();
};

const addNote = async () => {
  if (!note.value.trim()) return;
  await Database.insertInto("notes").values({ content: note.value }).execute();
  note.value = "";
  loadNotes();
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notebook</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="note"
        placeholder="Write a note..."
        class="ion-margin-bottom"
      ></ion-input>

      <ion-button expand="full" @click="addNote" color="primary">
        Save Note
      </ion-button>

      <ion-list class="ion-margin-top">
        <ion-item v-for="n in notes" :key="n.id">
          <ion-label>{{ n.content }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template> -->
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { sql } from "kysely";
import Database, { sqlite } from "../database"; // Fixed path
import Migrator from "../database/BrowserMigrator";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonInput,
  IonButton,
} from "@ionic/vue";

const note = ref("");
const notes = ref<{ id: number; content: string }[]>([]);

onMounted(async () => {
  await Migrator.migrate();
  loadNotes();
  const db = await sqlite.retrieveConnection("nuxt", false);
});

const loadNotes = async () => {
  notes.value = await Database.selectFrom("notes").selectAll().execute();
};

const addNote = async () => {
  if (!note.value.trim()) return;
  await Database.insertInto("notes").values({ content: note.value }).execute();
  note.value = "";
  loadNotes();
};

const deleteNote = async (id: number) => {
  await Database.deleteFrom("notes").where("id", "=", id).execute();
  loadNotes();
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notebook</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="note"
        placeholder="Write a note..."
        class="ion-margin-bottom"
      ></ion-input>

      <ion-button expand="full" @click="addNote" color="primary">
        Save Note
      </ion-button>

      <ion-list class="ion-margin-top">
        <ion-item v-for="n in notes" :key="n.id">
          <ion-label>{{ n.content }}</ion-label>
          <ion-button color="danger" @click="deleteNote(n.id)"
            >Delete</ion-button
          >
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
