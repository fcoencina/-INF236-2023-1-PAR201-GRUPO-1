
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  left_section: {
    marginBottom: 10,
  },
  title: {
    alignSelf: "center",
    textDecoration: 'underline', //subrayado
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  title_section: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
});

// Componente del PDF
const MyPDF = ({ formData }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page style={styles.page}>
          <View style={styles.left_section}>
            <Text>{"MINISTERIO DE SALUD\nS.S Metropolitano Occidente\nSAPU Violeta Parra"}</Text>
          </View>
          <View style={styles.title}>
            <Text>DATO ATENCIÓN URGENCIA</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DEL PACIENTE</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Nombre: {formData.name}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>R.U.T: {formData.rut}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Fecha nacimiento: {formData.f_nacimiento}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Sexo: {formData.sexo}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Dirección: {formData.direccion}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Comuna: {formData.comuna}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE INGRESO DEL PACIENTE</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Reemitido por:</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Centro remitente:</Text>
          </View>
          <View style={styles.title_section}>
            <Text>MOTIVO CONSULTA</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{"Aquí va un parrafito"}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Registro de Signos Vitales:</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{"Aquí va una tablita"}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>FECHA/HORA ATENCIÓN</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{"Aquí va..."}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE LA ATENCIÓN MÉDICA</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Anamnesis-Evolución</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Fecha/Hora</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Funcionario:{"\nAquí van como los síntomas(?)"}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Exploración Física:{"\nAquí van exámenes(?)"}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Diagnósticos:</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Diagnóstico(texto):</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Clasificación Diagnóstica CIE-10:</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPDF;
