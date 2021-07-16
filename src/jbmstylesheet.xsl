<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl"
    xmlns:ns1="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs xd"
    version="2.0">
    <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> July 13, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> Stephen McCormick and Jack B. Mitchell</xd:p>
            <xd:p></xd:p>
        </xd:desc>
    </xd:doc>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Guerrino Meschino</title>
            </head>
            <body>
                <!-- Div to contain red rubric that begins each chapter -->
                <div class="rubric">
                    <h2>Chapter 1</h2>
                    <p><!-- Rubric text --></p>
                </div>
               <xsl:apply-templates select="/TEI/text"></xsl:apply-templates>  
            </body>
        </html>
    </xsl:template>

    
    <!-- Div to contain red rubric that begins each chapter -->
    
    <xsl:template match="rubric">
       <div class="rubric"><xsl:apply-templates/></div>   
    </xsl:template>

    <!-- Div to containt chapter text -->
    <xsl:template match="lg">
        <div class="text"><xsl:apply-templates/></div>
    </xsl:template>
    
        <xsl:template match="//lg/l">
            <p><!-- Chapter text --><xsl:apply-templates/></p>
        </xsl:template>
        
</xsl:stylesheet>