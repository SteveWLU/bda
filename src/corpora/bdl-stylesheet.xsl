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
            <body>
                <h1>
                    <xsl:value-of select="TEI/teiHeader/fileDesc/titleStmt/title"/>
                </h1>
                <xsl:for-each select="/TEI/text/body/div1">
                    <h2 class="book">
                        <xsl:value-of select="@type | @n"/>
                    </h2>
                    <xsl:for-each select="div2">
                        <div class="chapter">

                            <h3>
                                <xsl:value-of select="@type | @n"/>
                            </h3>

                            <div class="rubric">
                                <xsl:for-each select="head">
                                    <p>
                                        <xsl:apply-templates/>
                                    </p>
                                </xsl:for-each>
                            </div>

                            <div class="text">
                                <xsl:for-each select="p">
                                    <p>
                                        <xsl:apply-templates/>
                                    </p>
                                </xsl:for-each>
                            </div>
                        </div>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="lb">
        <xsl:apply-templates/>
        <br/>
    </xsl:template>

    <xsl:template match="milestone">
        <a>
            <xsl:value-of select="@unit"/>
            <xsl:value-of select="@n"/>
        </a>
    </xsl:template>

    <xsl:template match="cb">
        <a> Col. <xsl:value-of select="@n"/>
        </a>
    </xsl:template>

</xsl:stylesheet>
