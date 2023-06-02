
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

// Componente del PDF
const MyPDF = ({ formData }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>DATOS DEL PACIENTE</Text>
        </View>
        <View style={styles.section}>
          <Text>Nombre: {formData.name}</Text>
        </View>
        <View style={styles.section}>
          <Text>R.U.T: {formData.rut}</Text>
        </View>
        <View style={styles.section}>
          <Text>Fecha nacimiento: {formData.f_nacimiento}</Text>
        </View>
        <View style={styles.section}>
          <Text>Sexo: {formData.sexo}</Text>
        </View>
        <View style={styles.section}>
          <Text>Dirección: {formData.direccion}</Text>
        </View>
        <View style={styles.section}>
          <Text>Comuna: {formData.comuna}</Text>
        </View>
        <View style={styles.section}>
          <Text>DATOS DE INGRESO DEL PACIENTE</Text>
        </View>
        <View style={styles.section}>
          <Text>Reemitido por:</Text>
        </View>
        <View style={styles.section}>
          <Text>Centro remitente:</Text>
        </View>
        <View style={styles.section}>
          <Text>MOTIVO CONSULTA: {"\nAquí va un parrafito"}</Text>
        </View>
        <View style={styles.section}>
          <Text>Registro de Signos Vitales:{"\nAquí va una tablita"}</Text>
        </View>
        <View style={styles.section}>
          <Text>FECHA/HORA ATENCIÓN:{"\nAquí va..."}</Text>
        </View>
        <View style={styles.section}>
          <Text>DATOS DE LA ATENCIÓN MÉDICA</Text>
        </View>
        <View style={styles.section}>
          <Text>Anamnesis-Evolución</Text>
        </View>
        <View style={styles.section}>
          <Text>Fecha/Hora</Text> 
        </View>
        <View style={styles.section}>
          <Text>Funcionario:{"\nAquí van como los síntomas(?)"}</Text>
        </View>
        <View style={styles.section}>
          <Text>Exploración Física:{"\nAquí van exámenes(?)"}</Text>
        </View>
        <View style={styles.section}>
          <Text>Diagnósticos:</Text>
        </View>
        <View style={styles.section}>
          <Text>Diagnóstico(texto):</Text>
        </View>
        <View style={styles.section}>
          <Text>Clasificación Diagnóstica CIE-10:</Text>
        </View>
      </Page>
    </Document>
    </PDFViewer>
  );
};

export default MyPDF;
