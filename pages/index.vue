<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";

const showAlert = () => {
  alert("Hello from Ionic in Nuxt!");
};
const router = useRouter();

const goToNotes = () => {
  router.push("/notes");
};
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ionic in Nuxt</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h2>Welcome to Ionic + Nuxt</h2>
      <IonButton expand="full" @click="showAlert">Click Me</IonButton>
      <IonButton expand="full" @click="goToNotes">Go to Notes</IonButton>
    </IonContent>
  </IonPage>
</template>
