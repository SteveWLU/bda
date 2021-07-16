<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl"
    exclude-result-prefixes="#all" xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    version="2.0">
    <xsl:output method="xml"/>
    
    <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> July 13, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> Stephen McCormick and Jack B. Mitchell</xd:p>
            <xd:p/>
        </xd:desc>
    </xd:doc>
    
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Guerrino Meschino Digital Edition</title>
            </head>
            <body>
                <xsl:apply-templates select="/TEI/text"/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="rubric">
        <div class="rubric"><xsl:apply-templates/></div>
    </xsl:template>
    
    <xsl:template match="//rubric/l">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="lg">
        <div class="chapter"><xsl:apply-templates/></div>
    </xsl:template>
    
    <xsl:template match="//lg/l">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
</xsl:stylesheet>
