
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
  rightUp_section: {
    position: 'absolute',
    height: 100,
    top: '9%',
    left: "55%",
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  rightDown_section: {
    position: 'absolute',
    height: 100,
    left: "50%",
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
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
            <Text>Nombre: {formData.data1.name}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>R.U.T: {formData.data1.rut}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Fecha nacimiento: {formData.data1.f_nacimiento}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Sexo: {formData.data1.sexo}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Dirección: {formData.data1.direccion}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Comuna: {formData.data1.comuna}</Text>
          </View>
          <View style={styles.rightUp_section}>
            <Text>Previsión: {formData.data1.prevision}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE INGRESO DEL PACIENTE</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Reemitido por: {formData.data2.remitido_por}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>Centro remitente: {formData.data2.centro_remitente}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>MOTIVO CONSULTA</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{formData.data2.motivo_consulta}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Registro de Signos Vitales:</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{formData.data2.signos_vitales}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>FECHA/HORA ATENCIÓN</Text>
          </View>
          <View style={styles.left_section}>
            <Text>{formData.data2.fecha_hora}</Text>
          </View>
          <View style={[styles.rightDown_section, {top: "29%", fontFamily: 'Helvetica-Bold'}]}>
            <Text>Categorizaciones: {formData.data2.categorizaciones}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>DATOS DE LA ATENCIÓN MÉDICA</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Anamnesis-Evolución</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Fecha/Hora: {formData.data3.fecha_hora}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Funcionario: {formData.data3.funcionario}</Text>
          </View>
          <View style={styles.left_section}>
            <Text>  {formData.data3.obs}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Exploración Física</Text>
          </View>
          <View style={styles.left_section}>
            <Text>  {formData.data3.explo_fisica}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Medicamentos</Text>
          </View>
          <View style={styles.left_section}>
            <Text>  {formData.data3.medicamentos}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Diagnósticos:</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Diagnóstico(texto): {formData.data3.diagnostico}</Text>
          </View>
          <View style={styles.title_section}>
            <Text>Clasificación Diagnóstica CIE-10: {formData.data3.diagCIE_10}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPDF;
